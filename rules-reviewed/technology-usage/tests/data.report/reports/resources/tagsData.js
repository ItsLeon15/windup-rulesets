function fillTagService(tagService) {
	// (name, isPrime, isPseudo, color), [parent tags]
	tagService.registerTag(new Tag("cluster", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("techsector02:connect", "Connect", false, true, "#38761D"), ['techreport-sectors:',]);
	tagService.registerTag(new Tag("webservices", null, false, false, null), ['techbox:webservice',]);
	tagService.registerTag(new Tag("css", "CSS", false, false, null), ['techbox:markup','formats:',]);
	tagService.registerTag(new Tag("techbox:other", "Other", false, true, null), ['techsector02:connect','techrow:java-ee','techrow:embedded',]);
	tagService.registerTag(new Tag("servlet", null, false, false, null), ['java-ee',]);
	tagService.registerTag(new Tag("techbox:clustering", "Clustering", false, true, null), ['techrow:java-ee','techsector04:sustain',]);
	tagService.registerTag(new Tag("classloader", null, false, false, null), ['java-se',]);
	tagService.registerTag(new Tag("descriptor", null, false, false, null), ['configuration',]);
	tagService.registerTag(new Tag("techbox:no-sql-database", "No SQL Database", false, true, null), ['techrow:java-ee','techrow:embedded','techsector03:store',]);
	tagService.registerTag(new Tag("ejb-xml-2.1", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("techbox:webservice", "WebService", false, true, null), ['techsector02:connect','techrow:embedded',]);
	tagService.registerTag(new Tag("techbox:markup", "Markup", false, true, null), ['techsector01:view','techrow:embedded',]);
	tagService.registerTag(new Tag("techbox:ejb", "EJB", false, true, null), ['techsector02:connect','techrow:java-ee',]);
	tagService.registerTag(new Tag("techsector05:execute", "Execute", false, true, "#674EA7"), ['techreport-sectors:',]);
	tagService.registerTag(new Tag("license-apache-1.1", "Apache License 1.1", false, false, null), ['license',]);
	tagService.registerTag(new Tag("license-apache-1.0", "Apache License 1.0", false, false, null), ['license',]);
	tagService.registerTag(new Tag("formats:", null, false, true, null), []);
	tagService.registerTag(new Tag("place:mvc", "MVC", false, true, null), ['techreport:placeboxes','techbox:mvc',]);
	tagService.registerTag(new Tag("cache", "Cache", false, false, null), ['concepts','techbox:caching',]);
	tagService.registerTag(new Tag("slf4j", null, false, false, null), ['logging',]);
	tagService.registerTag(new Tag("license-mpl", "Mozilla Public License 2.0", false, false, null), ['license',]);
	tagService.registerTag(new Tag("pool", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("file-system", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("cdi", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("techbox:transactions", "Transactions", false, true, null), ['techrow:java-ee','techrow:embedded','techsector04:sustain',]);
	tagService.registerTag(new Tag("redhat", "Red Hat", false, false, null), ['vendors:',]);
	tagService.registerTag(new Tag("javascript", "JavaScript", false, false, null), ['techbox:markup','formats:',]);
	tagService.registerTag(new Tag("techbox:streaming", "Streaming", false, true, null), ['techsector02:connect','techrow:java-ee','techrow:embedded',]);
	tagService.registerTag(new Tag("concepts", null, false, false, null), []);
	tagService.registerTag(new Tag("hibernate-ogm", "Hibernate OGM", false, false, null), ['ogm',]);
	tagService.registerTag(new Tag("datasource", null, false, false, null), ['java-ee',]);
	tagService.registerTag(new Tag("techbox:integration", "Integration", false, true, null), ['techrow:embedded','techsector05:execute',]);
	tagService.registerTag(new Tag("classloading", null, false, false, null), ['java-se',]);
	tagService.registerTag(new Tag("jsf", "JSF", false, false, null), ['web','framework:',]);
	tagService.registerTag(new Tag("websphere", null, false, false, null), ['application-server:','ibm',]);
	tagService.registerTag(new Tag("techbox:validation", "Validation", false, true, null), ['techrow:java-ee','techsector03:store',]);
	tagService.registerTag(new Tag("techbox:rules", "Rules & Processes", false, true, null), ['techrow:embedded','techsector05:execute',]);
	tagService.registerTag(new Tag("techreport:mappingofplacementtagnames", null, false, false, null), []);
	tagService.registerTag(new Tag("place:integration", "Integration", false, true, null), ['techreport:placeboxes','techbox:integration',]);
	tagService.registerTag(new Tag("place:sustain", "Sustain", false, true, null), ['techsector04:sustain','techreport:placesectors',]);
	tagService.registerTag(new Tag("jsp", "JSP", false, false, null), ['web','framework:',]);
	tagService.registerTag(new Tag("place:inversion-of-control", "Inversion of Control", false, true, null), ['techreport:placeboxes','techbox:ioc',]);
	tagService.registerTag(new Tag("jca", null, false, false, null), ['techbox:other',]);
	tagService.registerTag(new Tag("techsector04:sustain", "Sustain", false, true, "#DB4437"), ['techreport-sectors:',]);
	tagService.registerTag(new Tag("hibernate", "Hibernate", false, false, null), ['persistence',]);
	tagService.registerTag(new Tag("place:web-service", "Web Service", false, true, null), ['techreport:placeboxes','techbox:webservice',]);
	tagService.registerTag(new Tag("place:security", "Security", false, true, null), ['techbox:security','techreport:placeboxes',]);
	tagService.registerTag(new Tag("jms-mdb", "JMS message-driven bean", false, false, null), ['jms',]);
	tagService.registerTag(new Tag("place:logging", "Logging", false, true, null), ['techreport:placeboxes','techbox:logging',]);
	tagService.registerTag(new Tag("wsdl", null, false, false, null), ['descriptor','web-service',]);
	tagService.registerTag(new Tag("jta", "Java Transaction API", false, false, null), ['java-ee',]);
	tagService.registerTag(new Tag("techbox:test", "Test", false, true, null), ['techrow:embedded','techsector04:sustain',]);
	tagService.registerTag(new Tag("place:bean", "Bean", false, true, null), ['techreport:placeboxes','techbox:ejb',]);
	tagService.registerTag(new Tag("jboss-web", "JBoss Web", false, false, null), ['jboss','web-server:',]);
	tagService.registerTag(new Tag("java-se", "Java SE", true, false, "#BB0000"), []);
	tagService.registerTag(new Tag("ejb", "EJB", false, false, null), ['techbox:ejb','java-ee',]);
	tagService.registerTag(new Tag("license-apache-2.0", "Apache License 2.0", false, false, null), ['license',]);
	tagService.registerTag(new Tag("xfire", "XFire", false, false, null), ['apache-cxf',]);
	tagService.registerTag(new Tag("place:java-ee", "Java EE", false, true, null), ['techreport:placerows','techrow:java-ee',]);
	tagService.registerTag(new Tag("license-epl-1.0", "Eclipse Public License 1.0", false, false, null), ['license',]);
	tagService.registerTag(new Tag("jax-ws", null, false, false, null), ['techbox:http',]);
	tagService.registerTag(new Tag("decompiled-java-file", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("place:resource-management", "Resource Management", false, true, null), ['techreport:placeboxes','techbox:resource-management',]);
	tagService.registerTag(new Tag("techbox:http", "HTTP", false, true, null), ['techsector02:connect','techrow:java-ee',]);
	tagService.registerTag(new Tag("techbox:serverless-faas", "Serverless \/ FAAS", false, true, null), ['techrow:java-ee','techrow:embedded','techsector05:execute',]);
	tagService.registerTag(new Tag("ibm", "IBM", false, false, null), ['vendors:',]);
	tagService.registerTag(new Tag("persistence", null, true, false, null), ['concepts',]);
	tagService.registerTag(new Tag("jboss-esb", null, false, false, null), ['esb',]);
	tagService.registerTag(new Tag("richfaces", "RichFaces", false, false, null), ['web','framework:',]);
	tagService.registerTag(new Tag("place:rest", "REST", false, true, null), ['techreport:placeboxes','techbox:rest',]);
	tagService.registerTag(new Tag("application-bindings", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("techbox:3rd-party", "3rd party", false, true, null), ['techrow:embedded','techsector05:execute',]);
	tagService.registerTag(new Tag("jdbc-xa-datasource", "JDBC XA datasource", false, false, null), ['persistence',]);
	tagService.registerTag(new Tag("rules", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("lifecycle", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("spring", null, false, false, null), []);
	tagService.registerTag(new Tag("weblogic-ejb-xml", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("apache", "Apache", false, false, null), ['vendors:',]);
	tagService.registerTag(new Tag("techbox:messaging", "Messaging", false, true, null), ['techsector02:connect','techrow:java-ee',]);
	tagService.registerTag(new Tag("startup", null, false, false, null), ['lifecycle',]);
	tagService.registerTag(new Tag("license-unknown", "Unknown License", false, false, null), ['license',]);
	tagService.registerTag(new Tag("techbox:mvc", "MVC", false, true, null), ['techsector01:view','techrow:embedded',]);
	tagService.registerTag(new Tag("apache-license-2.0", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("soa-p", "SOA-P", false, false, null), ['soa',]);
	tagService.registerTag(new Tag("oracle", "Oracle", false, false, null), ['vendors:',]);
	tagService.registerTag(new Tag("sonic", "Sonic", false, false, null), ['vendors:',]);
	tagService.registerTag(new Tag("place:web", "Web", false, true, null), ['techbox:web','techreport:placeboxes',]);
	tagService.registerTag(new Tag("techreport:placerows", null, false, false, null), ['techreport:mappingofplacementtagnames',]);
	tagService.registerTag(new Tag("place:validation", "Validation", false, true, null), ['techbox:validation','techreport:placeboxes',]);
	tagService.registerTag(new Tag("thymeleaf", "Thymeleaf", false, false, null), ['web','framework:',]);
	tagService.registerTag(new Tag("place:clustering", "Clustering", false, true, null), ['techreport:placeboxes','techbox:clustering',]);
	tagService.registerTag(new Tag("license-gpl", "GNU General Public License File", false, false, null), ['license',]);
	tagService.registerTag(new Tag("jms-topic", "JMS topic", false, false, null), ['jms',]);
	tagService.registerTag(new Tag("techbox:observability", "Observability", false, true, null), ['techrow:java-ee','techrow:embedded','techsector04:sustain',]);
	tagService.registerTag(new Tag("place:execute", "Execute", false, true, null), ['techsector05:execute','techreport:placesectors',]);
	tagService.registerTag(new Tag("place:3rd-party", "3rd party", false, true, null), ['techbox:3rd-party','techreport:placeboxes',]);
	tagService.registerTag(new Tag("port", null, false, false, null), ['configuration',]);
	tagService.registerTag(new Tag("techbox:ioc", "Inversion of Control", false, true, null), ['techrow:java-ee','techrow:embedded','techsector05:execute',]);
	tagService.registerTag(new Tag("http", "HTTP", false, false, null), ['protocol',]);
	tagService.registerTag(new Tag("techbox:configuration-management", "Configuration Management", false, true, null), ['techrow:java-ee','techrow:embedded','techsector04:sustain',]);
	tagService.registerTag(new Tag("place:database", "Database", false, true, null), ['techreport:placeboxes','techbox:jdbc',]);
	tagService.registerTag(new Tag("techbox:object-mapping", "Object Mapping", false, true, null), ['techrow:embedded','techsector03:store',]);
	tagService.registerTag(new Tag("place:transaction", "Transaction", false, true, null), ['techreport:placeboxes','techbox:transactions',]);
	tagService.registerTag(new Tag("jboss-ws", "JBoss Web Services", false, false, null), ['web-service',]);
	tagService.registerTag(new Tag("mule-esb", null, false, false, null), ['esb',]);
	tagService.registerTag(new Tag("techbox:utilities", "Utilities", false, true, null), ['techrow:java-ee','techrow:embedded','techsector05:execute',]);
	tagService.registerTag(new Tag("techsector01:view", "View", false, true, "#1155CC"), ['techreport-sectors:',]);
	tagService.registerTag(new Tag("maven-xml", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("jdbc", "JDBC", false, false, null), ['persistence','techbox:jdbc',]);
	tagService.registerTag(new Tag("framework:", null, false, true, null), []);
	tagService.registerTag(new Tag("application-server:", null, false, true, null), ['java-ee',]);
	tagService.registerTag(new Tag("scheduler", null, false, false, null), ['asynchronous',]);
	tagService.registerTag(new Tag("smooks", null, false, false, null), ['messaging',]);
	tagService.registerTag(new Tag("jboss", "JBoss", false, false, null), ['redhat',]);
	tagService.registerTag(new Tag("reviewed-*", null, false, true, null), ['windup-internal:',]);
	tagService.registerTag(new Tag("client", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("place:serverless-\/-faas", "Serverless \/ FAAS", false, true, null), ['techreport:placeboxes','techbox:serverless-faas',]);
	tagService.registerTag(new Tag("log4j", null, false, false, null), ['logging',]);
	tagService.registerTag(new Tag("techreport:placesectors", null, false, false, null), ['techreport:mappingofplacementtagnames',]);
	tagService.registerTag(new Tag("techbox:rich", "Rich", false, true, null), ['techsector01:view','techrow:java-ee','techrow:embedded',]);
	tagService.registerTag(new Tag("orm", "ORM", false, false, null), ['persistence',]);
	tagService.registerTag(new Tag("remoting", null, false, false, null), ['java-ee',]);
	tagService.registerTag(new Tag("web-app", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("techbox:security", "Security", false, true, null), ['techrow:java-ee','techrow:embedded','techsector04:sustain',]);
	tagService.registerTag(new Tag("management", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("jndi", "JNDI", false, false, null), ['java-ee',]);
	tagService.registerTag(new Tag("techrow:java-ee", "Java EE", false, true, null), ['techreport-rows:',]);
	tagService.registerTag(new Tag("techbox:jdbc", "Database", false, true, null), ['techrow:java-ee','techsector03:store',]);
	tagService.registerTag(new Tag("wbi", null, false, false, null), ['rules',]);
	tagService.registerTag(new Tag("play", "Play", false, false, null), ['web','framework:',]);
	tagService.registerTag(new Tag("techbox:web", "Web", false, true, null), ['techsector01:view','techrow:java-ee','techrow:embedded',]);
	tagService.registerTag(new Tag("jax-rs", null, false, false, null), ['techbox:rest',]);
	tagService.registerTag(new Tag("spring-mvc", "Spring MVC", false, false, null), ['spring','web','techbox:mvc','framework:',]);
	tagService.registerTag(new Tag("tomcat", "Tomcat", false, false, null), ['apache','web-server:',]);
	tagService.registerTag(new Tag("jboss-eap5", null, false, false, null), ['application-server:','jboss',]);
	tagService.registerTag(new Tag("place:rules-and-processes", "Rules and Processes", false, true, null), ['techbox:rules','techreport:placeboxes',]);
	tagService.registerTag(new Tag("place:http", "HTTP", false, true, null), ['techbox:http','techreport:placeboxes',]);
	tagService.registerTag(new Tag("jboss-ews", "JBoss Enterprise Web Server", false, false, null), ['jboss','web-server:',]);
	tagService.registerTag(new Tag("techbox:resource-management", "Resource Management", false, true, null), ['techrow:java-ee','techrow:embedded','techsector04:sustain',]);
	tagService.registerTag(new Tag("orion", null, false, false, null), ['application-server:',]);
	tagService.registerTag(new Tag("camel", null, false, false, null), ['esb',]);
	tagService.registerTag(new Tag("context", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("https", "HTTPS", false, false, null), ['protocol',]);
	tagService.registerTag(new Tag("windup-internal:", null, false, true, null), []);
	tagService.registerTag(new Tag("techsector03:store", "Store", false, true, "#F4B400"), ['techreport-sectors:',]);
	tagService.registerTag(new Tag("license-bsd", "BSD License", false, false, null), ['license',]);
	tagService.registerTag(new Tag("place:view", "View", false, true, null), ['techsector01:view','techreport:placesectors',]);
	tagService.registerTag(new Tag("distributed", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("tibco", "Tibco", false, false, null), ['vendors:',]);
	tagService.registerTag(new Tag("transactions", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("messaging", "Messaging", true, false, "#AACC00"), ['java-ee',]);
	tagService.registerTag(new Tag("seam-ui-control", null, false, false, null), ['web','framework:',]);
	tagService.registerTag(new Tag("struts", "Struts", false, false, null), ['web','techbox:mvc','framework:',]);
	tagService.registerTag(new Tag("place:persistence", "Processing", false, true, null), ['techreport:placeboxes','techbox:persistence',]);
	tagService.registerTag(new Tag("apache-tuscany", null, false, false, null), ['soa',]);
	tagService.registerTag(new Tag("logging", null, true, false, null), ['concepts',]);
	tagService.registerTag(new Tag("place:test", "Test", false, true, null), ['techreport:placeboxes','techbox:test',]);
	tagService.registerTag(new Tag("mqe", null, false, false, null), ['messaging',]);
	tagService.registerTag(new Tag("place:processing", "Processing", false, true, null), ['techreport:placeboxes','techbox:processing',]);
	tagService.registerTag(new Tag("license-cc", "Creative Commons Public Domain License", false, false, null), ['license',]);
	tagService.registerTag(new Tag("persistence-unit", "persistence unit", false, false, null), ['jpa',]);
	tagService.registerTag(new Tag("weblogic-web-xml", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("web-xml-2.4", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("techbox:binding", "Binding", false, true, null), ['techsector02:connect','techrow:java-ee',]);
	tagService.registerTag(new Tag("jms-queue", "JMS queue", false, false, null), ['jms',]);
	tagService.registerTag(new Tag("sonic-esb", null, false, false, null), ['esb',]);
	tagService.registerTag(new Tag("glassfish", null, false, false, null), ['application-server:',]);
	tagService.registerTag(new Tag("web", "Web", true, false, null), ['techbox:web','concepts',]);
	tagService.registerTag(new Tag("unknown-license", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("place:streaming", "Streaming", false, true, null), ['techbox:streaming','techreport:placeboxes',]);
	tagService.registerTag(new Tag("ejb2", "EJB 2.0", false, false, null), ['ejb',]);
	tagService.registerTag(new Tag("deployment", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("tinkerpop-frames", "Tinkerpop Frames", false, false, null), ['ogm',]);
	tagService.registerTag(new Tag("vendors:", null, false, true, null), []);
	tagService.registerTag(new Tag("weblogic", null, false, false, null), ['application-server:','oracle',]);
	tagService.registerTag(new Tag("iona", "Iona", false, false, null), ['vendors:',]);
	tagService.registerTag(new Tag("place:batch", "Batch", false, true, null), ['techreport:placeboxes','techbox:processing',]);
	tagService.registerTag(new Tag("web-service", "Webservice", true, false, "#00BBBB"), ['java-ee',]);
	tagService.registerTag(new Tag("spring-cdi", null, false, false, null), ['spring','cdi',]);
	tagService.registerTag(new Tag("license-mit", "MIT License", false, false, null), ['license',]);
	tagService.registerTag(new Tag("place:database-driver", "Database Driver", false, true, null), ['techreport:placeboxes','techbox:database-driver',]);
	tagService.registerTag(new Tag("place:rich", "Rich", false, true, null), ['techbox:rich','techreport:placeboxes',]);
	tagService.registerTag(new Tag("esb", "Enterprise Service Bus", true, false, "#0000BB"), ['java-ee',]);
	tagService.registerTag(new Tag("techbox:persistence", "Persistence", false, true, null), ['techrow:java-ee','techsector03:store',]);
	tagService.registerTag(new Tag("place:json-p", "JSON-P", false, true, null), ['techreport:placeboxes','techbox:processing',]);
	tagService.registerTag(new Tag("commonj", null, false, false, null), ['asynchronous',]);
	tagService.registerTag(new Tag("webservice", null, false, false, null), ['web-service',]);
	tagService.registerTag(new Tag("place:configuration-management", "Configuration Management", false, true, null), ['techreport:placeboxes','techbox:configuration-management',]);
	tagService.registerTag(new Tag("place:connect", "Connect", false, true, null), ['techsector02:connect','techreport:placesectors',]);
	tagService.registerTag(new Tag("classifications:", null, false, true, null), []);
	tagService.registerTag(new Tag("soa", "SOA", false, false, null), ['java-ee',]);
	tagService.registerTag(new Tag("mail", null, false, false, null), ['techbox:other',]);
	tagService.registerTag(new Tag("gwt", null, false, false, null), ['techbox:mvc',]);
	tagService.registerTag(new Tag("spdy", "SPDY", false, false, null), ['protocol',]);
	tagService.registerTag(new Tag("place:observability", "Observability", false, true, null), ['techbox:observability','techreport:placeboxes',]);
	tagService.registerTag(new Tag("axis", "Apache Axis", false, false, null), ['web-service',]);
	tagService.registerTag(new Tag("web-server:", null, false, true, null), ['java-ee',]);
	tagService.registerTag(new Tag("platforms", null, false, false, null), []);
	tagService.registerTag(new Tag("rmi", null, false, false, null), ['techbox:other',]);
	tagService.registerTag(new Tag("jms", "JMS", false, false, null), ['techbox:messaging','messaging',]);
	tagService.registerTag(new Tag("place:no-sql-database", "No SQL Database", false, true, null), ['techreport:placeboxes','techbox:no-sql-database',]);
	tagService.registerTag(new Tag("protocol", null, false, true, null), ['concepts',]);
	tagService.registerTag(new Tag("mx4j", null, false, false, null), ['management',]);
	tagService.registerTag(new Tag("ogm", "OGM", false, false, null), ['persistence',]);
	tagService.registerTag(new Tag("jmx", null, false, false, null), ['management',]);
	tagService.registerTag(new Tag("techreport-rows:", null, false, true, null), []);
	tagService.registerTag(new Tag("websocket", "WebSocket", false, false, null), ['web',]);
	tagService.registerTag(new Tag("jaas", "JAAS", false, false, null), ['java-ee',]);
	tagService.registerTag(new Tag("techbox:rest", "REST", false, true, null), ['techsector02:connect','techrow:java-ee','techrow:embedded',]);
	tagService.registerTag(new Tag("ibm-wbi", null, false, false, null), ['ibm','wbi',]);
	tagService.registerTag(new Tag("html", "HTML", false, false, null), ['techbox:markup','formats:',]);
	tagService.registerTag(new Tag("license-lgpl", "GNU LGPL", false, false, null), ['license',]);
	tagService.registerTag(new Tag("techbox:processing", "Processing", false, true, null), ['techrow:java-ee','techrow:embedded','techsector05:execute',]);
	tagService.registerTag(new Tag("place:utilities", "Utilities", false, true, null), ['techreport:placeboxes','techbox:utilities',]);
	tagService.registerTag(new Tag("place:messaging", "Messaging", false, true, null), ['techreport:placeboxes','techbox:messaging',]);
	tagService.registerTag(new Tag("jni", "JNI", false, false, null), ['techbox:other','java-se',]);
	tagService.registerTag(new Tag("mq", null, false, false, null), ['messaging',]);
	tagService.registerTag(new Tag("jdbc-datasource", "JDBC datasource", false, false, null), ['persistence',]);
	tagService.registerTag(new Tag("techrow:embedded", "Embedded", false, true, null), ['techreport-rows:',]);
	tagService.registerTag(new Tag("java-ee", "Java EE", true, false, "#00CC00"), []);
	tagService.registerTag(new Tag("apache-cxf", "Apache CXF", false, false, null), ['messaging',]);
	tagService.registerTag(new Tag("license", "License", true, false, "#FAE663"), []);
	tagService.registerTag(new Tag("jonas", null, false, false, null), ['application-server:',]);
	tagService.registerTag(new Tag("jax-rpc", "JAX-RPC", false, false, null), ['remoting',]);
	tagService.registerTag(new Tag("resin", null, false, false, null), ['application-server:',]);
	tagService.registerTag(new Tag("applet", "Applet", false, false, null), ['techbox:rich','java-ee',]);
	tagService.registerTag(new Tag("soap", "SOAP", false, false, null), ['protocol',]);
	tagService.registerTag(new Tag("configuration", null, true, false, null), ['concepts',]);
	tagService.registerTag(new Tag("java-util-logging", "Java Util Logging", false, false, null), ['logging',]);
	tagService.registerTag(new Tag("place:caching", "Caching", false, true, null), ['techreport:placeboxes','techbox:caching',]);
	tagService.registerTag(new Tag("techbox:caching", "Caching", false, true, null), ['techrow:java-ee','techrow:embedded','techsector03:store',]);
	tagService.registerTag(new Tag("seam", "Seam Framework", false, false, null), ['web','framework:',]);
	tagService.registerTag(new Tag("place:store", "Store", false, true, null), ['techsector03:store','techreport:placesectors',]);
	tagService.registerTag(new Tag("jrun", null, false, false, null), ['application-server:',]);
	tagService.registerTag(new Tag("timer", null, false, false, null), ['asynchronous',]);
	tagService.registerTag(new Tag("database", null, false, false, null), ['persistence',]);
	tagService.registerTag(new Tag("security", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("postgresql", "PostgreSQL", false, false, null), ['persistence',]);
	tagService.registerTag(new Tag("jpa-entity", "JPA entity", false, false, null), ['jpa',]);
	tagService.registerTag(new Tag("asynchronous", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("jpa", "JPA", false, false, null), ['orm',]);
	tagService.registerTag(new Tag("techreport-sectors:", null, false, true, null), []);
	tagService.registerTag(new Tag("license-cddl", "CDDL", false, false, null), ['license',]);
	tagService.registerTag(new Tag("catchall", null, false, false, null), ['windup-internal:',]);
	tagService.registerTag(new Tag("rest", "REST", false, false, null), ['protocol','techbox:rest',]);
	tagService.registerTag(new Tag("sap", null, false, false, null), ['platforms',]);
	tagService.registerTag(new Tag("techreport:placeboxes", null, false, false, null), ['techreport:mappingofplacementtagnames',]);
	tagService.registerTag(new Tag("manifest", null, false, false, null), ['classifications:',]);
	tagService.registerTag(new Tag("wicket", "Wicket", false, false, null), ['web','techbox:mvc','framework:',]);
	tagService.registerTag(new Tag("place:markup", "Markup", false, true, null), ['techreport:placeboxes','techbox:markup',]);
	tagService.registerTag(new Tag("place:other", "Other", false, true, null), ['techreport:placeboxes','techbox:other',]);
	tagService.registerTag(new Tag("place:binding", "Binding", false, true, null), ['techreport:placeboxes','techbox:binding',]);
	tagService.registerTag(new Tag("performance", null, false, false, null), ['concepts',]);
	tagService.registerTag(new Tag("place:cdi", "CDI", false, true, null), ['techreport:placeboxes','techbox:processing',]);
	tagService.registerTag(new Tag("techbox:database-driver", "Database Driver", false, true, null), ['techrow:embedded','techsector03:store',]);
	tagService.registerTag(new Tag("jnlp", "JNLP", false, false, null), ['techbox:rich','java-ee',]);
	tagService.registerTag(new Tag("techbox:logging", "Logging", false, true, null), ['techrow:embedded','techsector04:sustain',]);
	tagService.registerTag(new Tag("place:embedded", "Embedded", false, true, null), ['techreport:placerows','techrow:embedded',]);
	tagService.registerTag(new Tag("place:object-mapping", "Object Mapping", false, true, null), ['techreport:placeboxes','techbox:object-mapping',]);
	tagService.registerTag(new Tag("properties", null, false, false, null), ['classifications:',]);
}
