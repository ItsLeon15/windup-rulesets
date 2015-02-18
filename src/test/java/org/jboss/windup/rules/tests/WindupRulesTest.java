package org.jboss.windup.rules.tests;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.inject.Inject;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.forge.arquillian.AddonDependency;
import org.jboss.forge.arquillian.Dependencies;
import org.jboss.forge.arquillian.archive.ForgeArchive;
import org.jboss.forge.furnace.Furnace;
import org.jboss.forge.furnace.repositories.AddonDependencyEntry;
import org.jboss.forge.furnace.util.Predicate;
import org.jboss.forge.furnace.util.Visitor;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.windup.config.DefaultEvaluationContext;
import org.jboss.windup.config.GraphRewrite;
import org.jboss.windup.config.RuleSubset;
import org.jboss.windup.config.WindupRuleProvider;
import org.jboss.windup.config.parser.ParserContext;
import org.jboss.windup.exec.WindupProcessor;
import org.jboss.windup.exec.configuration.WindupConfiguration;
import org.jboss.windup.graph.GraphContext;
import org.jboss.windup.graph.GraphContextFactory;
import org.jboss.windup.graph.model.ProjectModel;
import org.jboss.windup.graph.model.resource.FileModel;
import org.jboss.windup.util.exception.WindupException;
import org.jboss.windup.util.file.FileSuffixPredicate;
import org.jboss.windup.util.file.FileVisit;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.ocpsoft.logging.Logger;
import org.ocpsoft.rewrite.config.Configuration;
import org.ocpsoft.rewrite.param.DefaultParameterValueStore;
import org.ocpsoft.rewrite.param.ParameterValueStore;

/**
 * This test finds all *.windup.test.xml files in the current project and executes them.
 * 
 * The execution of tests can be affected by System properties. Available properties include:
 * 
 * <ul>
 * <li><b>ruleTest:</b> A regular expression specifying which tests to run. Eg, Foo.windup.test.xml will insure that only "Foo.windup.test.xml" is
 * executed by the test runner.</li>
 * </ul>
 * 
 * @author jsightler
 *
 */
@RunWith(Arquillian.class)
public class WindupRulesTest
{
    private static Logger LOG = Logger.getLogger(WindupRulesTest.class);

    private static final String RULE_TEST = "ruleTest";

    @Deployment
    @Dependencies({
                @AddonDependency(name = "org.jboss.windup.exec:windup-exec"),
                @AddonDependency(name = "org.jboss.windup.rules.apps:windup-rules-java"),
                @AddonDependency(name = "org.jboss.windup.rules.apps:windup-rules-java-ee"),
                @AddonDependency(name = "org.jboss.windup.rules.apps:windup-rules-xml"),
                @AddonDependency(name = "org.jboss.windup.reporting:windup-reporting"),
                @AddonDependency(name = "org.jboss.forge.furnace.container:cdi")
    })
    public static ForgeArchive getDeployment()
    {
        final ForgeArchive archive = ShrinkWrap.create(ForgeArchive.class)
                    .addBeansXML()
                    .addPackage(WindupRulesTest.class.getPackage())
                    .addAsAddonDependencies(
                                AddonDependencyEntry.create("org.jboss.windup.config:windup-config"),
                                AddonDependencyEntry.create("org.jboss.windup.config:windup-config-xml"),
                                AddonDependencyEntry.create("org.jboss.windup.graph:windup-graph"),
                                AddonDependencyEntry.create("org.jboss.windup.exec:windup-exec"),
                                AddonDependencyEntry.create("org.jboss.windup.reporting:windup-reporting"),
                                AddonDependencyEntry.create("org.jboss.windup.utils:utils"),
                                AddonDependencyEntry.create("org.jboss.forge.furnace.container:cdi")
                    );

        return archive;
    }

    @Inject
    private Furnace furnace;

    @Inject
    private GraphContextFactory factory;

    @Inject
    private WindupProcessor processor;

    private Pattern testToExecutePattern;

    @Test
    public void testWindupRules()
    {
        final ParserContext parser = new ParserContext(furnace);
        final List<String> successes = new ArrayList<>();
        final Map<String, Exception> errors = new LinkedHashMap<>();

        FileSuffixPredicate predicate = new FileSuffixPredicate("\\.windup\\.test\\.xml");
        final File directory = new File("rules");
        Visitor<File> visitor = new Visitor<File>()
        {
            @Override
            public void visit(File ruleTestFile)
            {
                if (!shouldExecuteTest(ruleTestFile))
                {
                    return;
                }
                try
                {
                    Path outputPath = getDefaultPath();
                    try (GraphContext context = factory.create(outputPath))
                    {
                        // load the ruletest file
                        RuleTest ruleTest = parser.processDocument(ruleTestFile.toURI());
                        List<Path> rulePaths = new ArrayList<>();
                        if (ruleTest.getRulePaths().isEmpty())
                        {
                            // The default path is ../, so this is two directories up from the test file iteself.
                            rulePaths.add(ruleTestFile.getParentFile().getParentFile().toPath().normalize().toAbsolutePath());
                        }
                        else
                        {
                            for (String rulePath : ruleTest.getRulePaths())
                            {
                                Path ruleTestDirectory = ruleTestFile.toPath().getParent().normalize();
                                Path path = ruleTestDirectory.resolve(rulePath).normalize().toAbsolutePath();
                                rulePaths.add(path.toAbsolutePath());
                            }
                        }

                        Configuration ruleTestConfiguration = parser.getBuilder().getConfiguration(context);

                        // run windup
                        File testDataPath = new File(ruleTestFile.getParentFile(), ruleTest.getTestDataPath());
                        Path reportPath = outputPath.resolve("reports");
                        runWindup(context, directory, rulePaths, testDataPath, reportPath.toFile());

                        // run the assertions from the ruletest file
                        GraphRewrite event = new GraphRewrite(context);
                        RuleSubset.create(ruleTestConfiguration).perform(event, createEvalContext(event));
                    }
                    successes.add(ruleTestFile.toString());
                }
                catch (Exception e)
                {
                    e.printStackTrace();
                    errors.put(ruleTestFile.toString(), e);
                }
            }
        };

        FileVisit.visit(directory, predicate, visitor);

        System.out.println("Successful tests:\n");
        for (String successfulTest : successes)
        {
            System.out.println("\t" + successfulTest);
        }
        System.out.println();

        if (!errors.isEmpty())
        {
            StringBuilder result = new StringBuilder();
            for (Map.Entry<String, Exception> entry : errors.entrySet())
            {
                String message = getExceptionMessage(entry.getValue());
                result.append("Error with test: " + entry.getKey()).append("\n");
                result.append("\tCause: ").append(message).append("\n");
            }
            System.out.println("Failed tests:\n");
            System.out.println(result.toString());
            Assert.fail(result.toString());
        }
    }

    private boolean shouldExecuteTest(File testFile)
    {
        String testToExecute = System.getProperty(RULE_TEST);
        if (StringUtils.isBlank(testToExecute))
            return true;

        if (testToExecutePattern == null)
            testToExecutePattern = Pattern.compile(testToExecute);

        Matcher m = testToExecutePattern.matcher(testFile.toString());
        if (!m.find())
        {
            LOG.info("Skipping test: " + testFile + " as it does not match pattern: " + testToExecute);
            return false;
        }
        else
        {
            LOG.info("Running test: " + testFile + " as it matches pattern: " + testToExecute);
            return true;
        }
    }

    private String getExceptionMessage(Exception e)
    {
        if (e instanceof WindupException)
        {
            WindupException windupException = (WindupException) e;
            if (windupException instanceof WindupAssertionException)
            {
                return windupException.getMessage();
            }

            Throwable cause = windupException.getCause();
            while (cause != null)
            {
                if (cause instanceof WindupAssertionException)
                    return cause.getMessage();
                cause = cause.getCause();
            }
        }

        return e.getMessage() == null ? "Unknown" : e.getMessage();
    }

    private DefaultEvaluationContext createEvalContext(GraphRewrite event)
    {
        final DefaultEvaluationContext evaluationContext = new DefaultEvaluationContext();
        final DefaultParameterValueStore values = new DefaultParameterValueStore();
        evaluationContext.put(ParameterValueStore.class, values);
        return evaluationContext;
    }

    private Path getDefaultPath()
    {
        return FileUtils.getTempDirectory().toPath().resolve("WindupRulesTests").resolve("windupgraph_" + RandomStringUtils.randomAlphanumeric(6));
    }

    private void runWindup(GraphContext context, File baseRuleDirectory, final List<Path> rulePaths, File input, File output) throws IOException
    {
        ProjectModel pm = context.getFramed().addVertex(null, ProjectModel.class);
        pm.setName("Project: " + input.getAbsolutePath());
        FileModel inputPath = context.getFramed().addVertex(null, FileModel.class);
        inputPath.setFilePath(input.getCanonicalPath());

        FileUtils.deleteDirectory(output);
        Files.createDirectories(output.toPath());

        inputPath.setProjectModel(pm);
        pm.setRootFileModel(inputPath);
        WindupConfiguration windupConfiguration = new WindupConfiguration()
                    .setGraphContext(context);
        windupConfiguration.setInputPath(Paths.get(inputPath.getFilePath()));
        windupConfiguration.setOutputDirectory(output.toPath());
        windupConfiguration.addDefaultUserRulesDirectory(baseRuleDirectory.toPath());

        final String baseRulesPathNormalized = baseRuleDirectory.toPath().normalize().toAbsolutePath().toString();
        windupConfiguration.setRuleProviderFilter(new Predicate<WindupRuleProvider>()
        {
            @Override
            public boolean accept(WindupRuleProvider type)
            {
                if (type.getOrigin() == null)
                    return true;

                if (!type.getOrigin().contains(baseRulesPathNormalized))
                    return true;

                for (Path acceptedRulePath : rulePaths)
                {
                    if (type.getOrigin().contains(acceptedRulePath.toString()))
                        return true;
                }
                return false;
            }
        });
        processor.execute(windupConfiguration);
    }
}
