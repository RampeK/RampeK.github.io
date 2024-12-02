const translations = {
    fi: {
        nav: {
            home: "ETUSIVU",
            skills: "TAIDOT",
            projects: "PROJEKTIT",
            contact: "YHTEYSTIEDOT"
        },
        hero: {
            greeting: "Hei, olen",
            role: "Tietotekniikan insinööriopiskelija",
            and: "ja",
            wannaBe: "tuleva",
            fullStack: "Full Stack Kehittäjä",
            description: "Erikoistunut moderniin web-kehitykseen ja .NET-teknologioihin. Intohimona rakentaa skaalautuvia ja käyttäjäystävällisiä sovelluksia.",
            buttons: {
                projects: "Katso projektit",
                contact: "Ota yhteyttä"
            }
        },
        about: {
            title: "Tietoa minusta",
            tabs: {
                education: "Koulutus",
                experience: "Kokemus",
                goals: "Tavoitteet"
            },
            education: "Opiskelen kolmatta vuotta Savonia-ammattikorkeakoulussa tietotekniikan insinööriksi. Koulutuksessa olen erikoistunut front- ja back-end kehitykseen, tietojärjestelmien määrittelyyn, suunnitteluun ja toteutukseen. Keskeisiä osaamisalueitani ovat tietoverkot, tietokannat ja pilvipalvelut.",
            experience: "Opinnoissani olen syventynyt erityisesti web-kehitykseen ja .NET-teknologioihin. Hallitsen ohjelmistojen suunnittelun ja toteutuksen sekä web- että sovelluskohtaisilla käyttöliittymillä. Kokemusta on myös tietokantojen integroinnista, valmisohjelmistojen räätälöinnistä sekä tietoverkkojen ja palvelinjärjestelmien suunnittelusta. Olen aktiivisesti osallistunut erilaisiin game jameihin ja hackathoneihin kehittääkseni taitojani ja verkostoituakseni muiden kehittäjien kanssa.",
            goals: "Tavoitteenani on kehittyä tietotekniikan suunnittelun, käytön ja soveltamisen asiantuntijaksi. Etsin harjoittelupaikkaa, jossa pääsen työskentelemään teknologisen kehityksen kärkijoukoissa ja kehittämään palvelujen, sovellusten ja toiminnan suunnittelua. Olen innokas oppimaan uutta ja uskon, että voin tuoda tiimiin sekä tuoretta näkökulmaa että vahvat tiimityötaidot."
        },
        skills: {
            title: "Taidot",
            subtitle: "Klikkaamalla saat tarkemman kuvauksen",
            other: {
                title: "Muut"
            },
            skillDescriptions: {
                "React.js": "Ymmärrys komponenttipohjaisesta kehityksestä, React Hooks:sta (useState, useEffect) ja props-konseptista. Kokemusta yksinkertaisten React-sovellusten rakentamisesta.",
                "HTML & CSS": "Käytetty Portfolio-sivuston toteutuksessa. Kokemusta responsiivisesta suunnittelusta, Flexboxista, CSS Gridistä ja animaatioista. Tuttu myös CSS-esiprosessorien (Sass) ja CSS Modules -tekniikan kanssa.",
                "JavaScript": "Käytetty kaikissa web-projekteissani. Kokemusta modernista ES6+ syntaksista (arrow functions, destructuring, async/await), DOM-manipulaatiosta ja Web API:sta. Tuttu npm-paketinhallinta ja yleiset kirjastot.",
                "TypeScript": "Osaan TypeScriptin perustoiminnot kuten rajapinnat, tyyppimäärittelyt ja geneerisyyden. Käytän näitä ominaisuuksia aktiivisesti kouluprojekteissa ja työn alla olevissa projekteissa.",
                "jQuery": "Kokemusta DOM-manipulaatiosta, event handlereista ja Ajax-kutsuista. Käytetty legacy-projektien ylläpidossa.",
                "Bootstrap": "Käytössä useissa projekteissa. Kokemusta grid-systeemin, komponenttien ja utilities-luokkien käytöstä. Tuttu teemojen muokkauksen ja responsiivisen suunnittelun kanssa.",
                "C#": "Käytetty erityisesti Cabin Managing Program -projektissa. Kokemusta OOP-periaatteista, LINQ:stä ja Entity Framework -tietokantaoperaatioista. Tuttu myös ASP.NET Core -kehityksen kanssa.",
                ".NET & Core": "Hyvä osaaminen .NET-ympäristössä, mukaan lukien ASP.NET Core web-kehitys, Entity Framework Core -tietokantaoperaatiot ja Dependency Injection -suunnittelumallit. Kokemusta erityisesti REST API:en ja mikropalveluiden kehittämisestä.",
                "Java": "Käytössä opinnoissa Java Web Development -kurssilla. Kokemusta Spring Boot -kehityksestä, REST API:en toteutuksesta ja JPA:sta. Tuttu Maven/Gradle-työkalujen ja JUnit-testauksen kanssa.",
                "Python": "Käytetty erityisesti automaatioskriptien kirjoittamiseen ja työkalujen kehittämiseen. Kokemusta Flask-web-kehyksestä ja virtuaaliympäristöjen käytöstä.",
                "Node.js": "Kokemusta Express.js-frameworkista ja REST API:en kehityksestä. Tuttu npm-ekosysteemin ja asynkronisen ohjelmoinnin kanssa.",
                "SQL": "Käytetty Cabin Managing Program -projektissa. Kokemusta tietokantojen suunnittelusta, CRUD-operaatioista, liitoksista ja indeksoinnista. Tuttu sekä MySQL että PostgreSQL kanssa.",
                "Git": "Käytössä kaikissa projekteissa. Kokemusta brancheista, mergeistä ja konfliktien ratkaisusta. Tuttu GitHub/GitLab-alustojen ja pull requestien kanssa.",
                "Docker": "Kokemusta konttien ja imageiden käytöstä sekä Docker Composesta. Käytetty kehitysympäristöjen pystyttämiseen ja sovellusten kontittamiseen.",
                "Azure": "Kokemusta web-sovellusten julkaisusta Azure-pilvipalvelussa. Käytetty Azure App Service ja Azure SQL Databasea.",
                "AWS": "Kokemusta AWS:n yleisimmistä palveluista kuten S3, EC2 ja RDS. Tuttu AWS Management Consolen käytön kanssa.",
                "MongoDB": "Kokemusta NoSQL-tietokannoista ja MongoDB:n käytöstä. Tuttu CRUD-operaatioiden ja MongoDB Compassin kanssa.",
                "Linux": "Kokemusta Linux-ympäristöistä ja yleisimmistä komentorivikomennoista. Tuttu shell-skriptauksen ja tiedostojärjestelmän rakenteen kanssa.",
            },
            defaultDescriptions: {
                "Frontend": "Frontend-kehittäjänä minulla on kokemusta modernien web-sovellusten rakentamisessa. Pääteknologioihini kuuluu JavaScript/TypeScript, jolla olen toteuttanut useita responsiivisia käyttöliittymiä. Hallitsen myös HTML:n ja CSS:n parhaat käytännöt.",
                "Backend": "Backend-kehittäjänä erikoisosaamiseni on .NET-ympäristössä, missä olen toteuttanut web-sovelluksia C#:lla. Hallitsen myös Java- ja Python-kehityksen, sekä tietokantojen suunnittelun ja toteutuksen. REST API -rajapintojen kehittäminen on osa päivittäistä työskentelyäni.",
                "Other": "Osaan käyttää moderneja DevOps-työkaluja ja pilvipalveluita Azure ja AWS ympäristöissä. Kokemusta löytyy konttiteknologioista (Docker) ja versionhallinnasta (Git). NoSQL-tietokannat ja Linux-ympäristöt ovat myös osa työkalupakkiani."
            },
            frontend: {
                description: "Frontend-kehittäjänä minulla on vahva osaaminen modernien web-sovellusten rakentamisessa. Hallitsen TypeScriptin ja modernin JavaScriptin käytön, sekä HTML:n ja CSS:n parhaat käytännöt. Kokemusta responsiivisesta suunnittelusta ja käyttöliittymien toteutuksesta."
            }
        },
        projects: {
            title: "Projektit",
            portfolio: {
                title: "Portfolio Sivu",
                description: "Moderni ja responsiivinen portfolio-sivusto, joka esittelee projektejani ja taitojani interaktiivisilla elementeillä"
            },
            cabin: {
                title: "Mökkivarausjärjestelmä",
                description: "Mökkien varausjärjestelmä varaus-, laskutus- ja raportointiominaisuuksilla"
            },
            game: {
                title: "Let Him Cook -peli",
                description: "Humoristinen ruoanlaittopeli, joka kehitettiin 48 tunnin game jamissa"
            },
            editor: {
                title: "Code Editor Pro",
                description: "Moderni selainpohjainen koodieditori reaaliaikaisella koodianalyysillä"
            },
            comingSoon: "Tulossa pian",
            future: "Jännittävä uusi projekti kehitteillä. Pysy kuulolla!",
            aurora: {
                description: "Työpöytäsovellus, joka yhdistää reaaliaikaisen aurinkoaktiivisuuden seurannan ja revontulien ennustamisen Suomessa. Sisältää interaktiivisia visualisointeja avaruussäädatasta."
            },
            viewProject: "Näytä"
        },
        contact: {
            title: "Yhteystiedot",
            interested: "Kiinnostuitko?",
            description: "Etsin harjoittelupaikkaa, jossa pääsen kehittämään osaamistani ja oppimaan uutta!"
        },
        title: "Portfolio"
    },
    en: {
        nav: {
            home: "HOME",
            skills: "SKILLS",
            projects: "PROJECTS",
            contact: "CONTACT"
        },
        hero: {
            greeting: "Hello, I'm",
            role: "Information Technology Engineering",
            and: "Student and",
            wannaBe: "upcoming",
            fullStack: "Full Stack Developer",
            description: "Specialized in modern web development and .NET technologies. Passionate about building scalable and user-friendly applications.",
            buttons: {
                projects: "View Projects",
                contact: "Contact Me"
            }
        },
        about: {
            title: "About Me",
            tabs: {
                education: "Education",
                experience: "Experience",
                goals: "Goals"
            },
            education: "I'm a third-year Information Technology Engineering student at Savonia University of Applied Sciences. My studies focus on front- and back-end development, system design, and implementation. Key areas of expertise include networks, databases, and cloud services.",
            experience: "I've specialized in web development and .NET technologies. I'm proficient in software design and implementation with both web and application interfaces. I have experience in database integration and system design. I actively participate in game jams and hackathons to develop my skills and network with other developers.",
            goals: "My goal is to become an expert in IT design, implementation, and application. I'm seeking an internship position where I can work with cutting-edge technologies and develop my skills in service and application design. I'm eager to learn and believe I can bring both fresh perspective and strong teamwork skills."
        },
        skills: {
            title: "Skills",
            subtitle: "Click for more details",
            other: {
                title: "Other"
            },
            skillDescriptions: {
                "React.js": "Understanding of component-based development, React Hooks (useState, useEffect) and props concept. Experience in building simple React applications.",
                "HTML & CSS": "Used in Portfolio website implementation. Experience with responsive design, Flexbox, CSS Grid and animations. Familiar with CSS preprocessors (Sass) and CSS Modules technique.",
                "JavaScript": "Used in all web projects. Experience with modern ES6+ syntax (arrow functions, destructuring, async/await), DOM manipulation and Web APIs. Familiar with npm package management and common libraries.",
                "TypeScript": "Proficient in TypeScript features like interfaces, type definitions and generics. Actively using these features in school projects and ongoing development work.",
                "jQuery": "Experience with DOM manipulation, event handlers and Ajax calls. Used in legacy project maintenance.",
                "Bootstrap": "Used in multiple projects. Experience with grid system, components and utility classes. Familiar with theme customization and responsive design.",
                "C#": "Used especially in the Cabin Managing Program project. Experience with OOP principles, LINQ, and Entity Framework database operations. Also familiar with ASP.NET Core development.",
                ".NET & Core": "Strong expertise in .NET environment, including ASP.NET Core web development, Entity Framework Core database operations and Dependency Injection patterns. Experience particularly in developing REST APIs and microservices.",
                "Java": "Actively used in studies and ongoing Java Web Development course. Experience with Spring Boot development, REST API implementation and JPA. Familiar with Maven/Gradle tools, JUnit testing and Spring Security.",
                "Python": "Experience with Python programming and its common libraries (NumPy, Pandas). Used in data analysis and automation scripting. Familiar with virtual environments.",
                "Node.js": "Experience with asynchronous programming in Node.js environment. Used Express.js framework and npm package management. Familiar with REST API development.",
                "SQL": "Used in Cabin Managing Program project. Experience with database design, CRUD operations, joins and indexing. Familiar with both MySQL and PostgreSQL.",
                "Git": "Used in all projects. Experience with branches, merges and conflict resolution. Familiar with GitHub/GitLab platforms and pull requests.",
                "Docker": "Experience with containers and images usage, and Docker Compose. Used for setting up development environments and containerizing applications.",
                "Azure": "Experience with web application deployment in Azure cloud service. Used Azure App Service and Azure SQL Database.",
                "AWS": "Experience with common AWS services like S3, EC2 and RDS. Familiar with AWS Management Console usage.",
                "MongoDB": "Experience with NoSQL databases and MongoDB usage. Familiar with CRUD operations and MongoDB Compass.",
                "Linux": "Experience with Linux environments and common command line commands. Familiar with shell scripting and file system structure."
            },
            defaultDescriptions: {
                "Frontend": "As a frontend developer, I have experience in building modern web applications. My main technologies include JavaScript/TypeScript, which I've used to create multiple responsive interfaces. I'm also proficient in HTML and CSS best practices.",
                "Backend": "As a backend developer, my focus is on the .NET environment, where I've implemented web applications using C#. I'm also proficient in Java and Python development, as well as database design and implementation. REST API development is part of my daily work.",
                "Other": "I work with modern DevOps tools and cloud services in Azure and AWS environments. I have experience with Docker container technologies and Git version control. NoSQL databases and Linux environments are also part of my toolkit."
            },
            frontend: {
                description: "Frontend-kehittäjänä minulla on vahva osaaminen modernien web-sovellusten rakentamisessa. Hallitsen TypeScriptin ja modernin JavaScriptin käytön, sekä HTML:n ja CSS:n parhaat käytännöt. Kokemusta responsiivisesta suunnittelusta ja käyttöliittymien toteutuksesta."
            }
        },
        projects: {
            title: "Projects",
            portfolio: {
                title: "Portfolio Page",
                description: "Modern and responsive portfolio website showcasing my projects and skills with interactive elements"
            },
            cabin: {
                title: "Cabin Managing Program",
                description: "Cabin booking management system with booking, billing, and reporting features"
            },
            game: {
                title: "Let Him Cook Game",
                description: "A comedic cooking simulation game developed during a 48-hour game jam"
            },
            editor: {
                title: "Code Editor Pro",
                description: "A modern browser-based code editor with real-time code analysis"
            },
            comingSoon: "Coming Soon",
            future: "Exciting new project in development. Stay tuned for updates!",
            aurora: {
                description: "A desktop application that combines real-time solar activity monitoring and aurora forecasting in Finland. Features interactive visualizations of space weather data."
            },
            viewProject: "View"
        },
        contact: {
            title: "Contact",
            interested: "Interested?",
            description: "I'm looking for an internship position where I can develop my skills and learn new things!"
        },
        title: "Portfolio"
    }
}; 