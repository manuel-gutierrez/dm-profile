
const cvCards = {
    "running": {
        "title": "Sao Paulo Marathon and Boston 2024 qualify time",
        "children": "true",
        "bullets": [
            "Started running in grad school, quit after graduation",
            "Decided to train running looking to someday run The New York City Marathon",
            "From 2020 til 2022 some failed Attempts in getting Marathon finisher time",
            "2023 Q1 main goal achieved: Marathon distance DONE.",
            "April 2nd goal accomplished with also Boston Marathon Qualifying time",
        ]
    },
    "calendly": {
        "title": "Calendly Fullstack III: Meeting Unicorn company",
        "children": "true",
        "bullets": [
            "Joined Calendly as the first Latin America Engineer, after a 5 steps though interview process.",
            "Hired as Fullstack III product engineer for the Growth and activation team.",
            "Work closely with Product manager in order to design and implement fullstack experiments (A/B testing, and feature flags rollouts).",
            "Build a microservice in GCP taking out the experimentation logic (Optimizely both Ruby and React SDK).",
            "I collaborate in the voluntary weekly meeting to talk about microservice architecture and how Calendly was approaching that huge transition"+
            "help discussing, testing and validating different approaches to perform a migration of a database for a new microservice with more than 5Gb of data."
        ]
    },
    "docketwise": {
        "title": "",
        "children": "true",
        "billing": [
            "Was contacted to contribute to expanding the product from a single smart forms and simple  case management system to a powerful attorneys tool.",
            "Fullstack developer building end to end new features.",
            "File system manager using web sockets",
            "Sms chat and two way communication using twilio api integration.",
            "Interact with the payment and billing system that uses Stripe api integration.",
            "Add and improve the report section.",
        ]
    },
    "leantech": {
        "title": "",
        "children": "true",
        "bullets": [
            "Internal project: Fetch, parse and organize developers information form:  github, bitbucket, clockify, jira apis data using Python.",
            "Worked in two different Transportation management systems (TMS) with clients in Usa and Canada.",
            "It allowed me to strengthen my sql knowledge by optimizing queries and building scripts in the database management systems. I also worked with Postgis for full truck routing and fleet tracking.",
            "lead a team of 3 more developers in a new version of Trinet Logistics (Montreal 3PL company.)  TMS.",
            "speed up my learning process in Typescript Graphql (0 prior knowledge).",
            "refactoring (70% backend, 20% frontend).",
            "interact with the client in the technical decisions"
        ]
    },
    "one-one": {
        "title": "",
        "children": "true",
        "bullets": [
            "Algorithms and Data Structures with professor Tim Rougarden material (videos and books)",
            "SOLID",
            "Patterns",
            "Clean code && Clean Arquitecture",
            "SQL",
            "Databases",
            "Postgres, Redis, Rabit MQ",
            "Programing Languages: Ruby, Java",
            "Infraestructure: AWS, Docker, Kubernetes",
            "Three projects: one search engine, one code evaluator and a proof of concept of a Blockchain."

        ]
    },
    "order": {
        "title": "",
        "children": "true",
        "bullets": [
            "Collaborate building a service called Vendor Bridge in a service oriented arquitecture to connect Order core monolith with the diferent client vendors.",
            "Build vendors integrations such as Amazon, Costco, a couple Shopify businesses and api vendors integrations.",
            "Visited New York when order got We Work a client to run several Arquitecture and road map meetings",
            "Contribute to a big arquitecture refactor that improved the developer experience when integrating more vendors to the Vendor bridge service.",
            "Mentored by the Senior engineer in the team.",
            "Learnt the best management and testing practices.",
        ]
    },
    "make_it": {
        "title": "",
        "children": "true",
        "bullets": [
            "Enroll Make it real camp that was a 4 months Full Stack development bootcamp using Ruby and Javascript languages.",
            "Did two months internship in Make it real Education platform"
        ]
    },
    "smart_sensors": {
        "title": "",
        "children": "true",
        "bullets": [
            "Enroll Make it real camp that was a 4 months Full Stack development bootcamp using Ruby and Javascript languages.",
            "Did two months internship in Make it real Education platform",
        ]
    },
    "isgt": {
        "title": "",
        "children": "true",
        "bullets": [
            "Paper presentation in the Innovative smart grids technologies 2016 North America",
            "Visited UC berkeley",
            "Attended a summer course in Model Predictive Control with in Cartagena.",
            "Took Optimal Control Coure after graduating.",
        ]
    },
    "projects": {
        "title": "",
        "children": "true",
        "bullets": [
            "With several Undergrad students we create a model that shows and demonstrate the most important concepts of a smart grids such as:",
            "Adding Renewable energy source (PV)",
            "Real time monitoring",
            "I programmed in Labview the smart grids model SCADA.",
            "Advance Metering infrastructure",
            "Manufacturing proprietary RTU",
            "Demand Response",
            "Demonstrate the use of Price, incentive demand response programs",
            "Self Healing",
            "Using the AMI with the operation of proprietary converters that was able to work in Grid connected mode and Island mode."
        ]
    },
    "silice_3": {
        "title": "",
        "children": "true",
        "bullets": [
            "I started as Smart grids researcher leading the SILICE III I Pontificia Universidad Javeriana PART.",
            "I visited Sao Paulo for the Innovative in smart grids (latam) 2013 to gain knoledge for desinging a smart grids model.",
            "Talked to FIU Professor Osama A. Mohammed who inspired me to pursue my path in Smart grids."
        ]
    },
    "undergrad_proyect": {
        "title": "",
        "children": "true",
        "bullets": [
            "Recruit two students to help to build a microgrid laboratory test bed.",
            "This project allowed my university Pontificia Universidad Javeriana to join Silice III project conducted by Los Andes University and Bogotas Utility company (Now Enel).",
        ]
    },
    "undergrad": {
        "title": "",
        "children": "true",
        "bullets": [
        ]
    }
}
const values = [
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011"
]
const dynamic = {
    "2023": ["running"],
    "2022": ["calendly", "docketwise"],
    "2021": ["docketwise", "leantech"],
    "2020": ["leantech"],
    "2019": ["order", "one-one"],
    "2018": ["order"],
    "2017": ["make_it","smart_sensors"],
    "2016": ["isgt"],
    "2015": ["projects"],
    "2014": ["silice_3"],
    "2013": ["silice_3"],
    "2012": ["undergrad_proyect"],
    "2011": ["undergrad"],
}
const cvData = { cvCards, years: values, dynamic}

export default cvData;