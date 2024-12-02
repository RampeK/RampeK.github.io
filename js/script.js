document.addEventListener('DOMContentLoaded', () => {
    const skillDescriptions = {
        'React.js': 'React-kehittäjänä olen toteuttanut useita moderneja SPA-sovelluksia. Hallitsen komponenttipohjaisen kehityksen, React Hooks -toiminnallisuudet, sekä tilanhallinnan (Redux/Context API). Kokemusta löytyy myös Next.js-kehityksestä ja React Native -mobiilisovelluksista.',
        
        'Angular.JS': 'Angular-osaamiseni kattaa komponenttipohjaisen arkkitehtuurin, TypeScript-integraation, RxJS:n reaktiivisen ohjelmoinnin ja Angular Material -käyttöliittymäkomponentit. Olen työskennellyt sekä Angular 2+ että AngularJS projektien parissa.',
        
        'HTML & CSS': 'Vahva osaaminen modernista HTML5-merkkauksesta ja CSS3-tyyleistä. Hallitsen responsiivisen suunnittelun, CSS Grid- ja Flexbox-layoutit, CSS-animaatiot sekä CSS-preprocessorit (Sass/SCSS). Keskityn semanttiseen HTML-rakenteeseen ja saavutettavuuteen.',
        
        'JavaScript': 'JavaScript-osaamiseni kattaa sekä modernin ES6+ syntaksin että perinteisen JS-kehityksen. Hallitsen asynkronisen ohjelmoinnin (Promises, async/await), DOM-manipulaation ja Web API:t. Kokemusta myös npm-ekosysteemistä ja bundler-työkaluista.',
        
        'TypeScript': 'TypeScript-kehittäjänä arvostan vahvaa tyypitystä ja OOP-periaatteita. Hallitsen TypeScriptin edistyneet ominaisuudet kuten Generics, Decorators ja Type Guards. Käytän TypeScriptiä sekä frontend- että backend-kehityksessä.',
        
        'jQuery': 'Vankka kokemus jQuery-kirjaston käytöstä legacy-projekteissa. Hallitsen DOM-manipulaation, event handling -toiminnallisuudet, AJAX-kutsut ja jQuery-pluginien kehityksen.',
        
        'Bootstrap': 'Bootstrap-osaamiseni kattaa sekä valmiiden komponenttien käytön että mukautettujen teemojen luomisen. Hallitsen Bootstrapin grid-systeemin, komponentit ja utilities-luokat. Kokemusta myös Bootstrap-teemojen räätälöinnistä Sass:lla.',
        
        'C#': 'Vahvin ohjelmointikieleni, jolla olen toteuttanut lukuisia .NET-pohjaisia sovelluksia. Hallitsen syvällisesti kielen modernit ominaisuudet (LINQ, async/await, generics) sekä .NET ekosysteemin (ASP.NET Core, Entity Framework, Blazor). Kokemusta erityisesti web API:en ja mikropalveluiden kehittämisestä.',
        
        '.NET & Core': 'Laaja kokemus .NET-ympäristöstä, mukaan lukien ASP.NET Core web-kehitys, Entity Framework Core -tietokantaoperaatiot ja Dependency Injection -suunnittelumallit. Hallitsen myös .NET MAUI:n mobiili- ja työpöytäsovellusten kehittämiseen.',
        
        'Java': 'Toinen vahva ohjelmointikieleni C#:n rinnalla. Kokemusta Spring Boot -kehityksestä, REST-rajapintojen toteutuksesta ja JPA-tietokantaoperaatioista. Hallitsen myös Java-pohjaisen Android-kehityksen ja enterprise-sovellusten rakentamisen.',
        
        'Python': 'Käytän Pythonia erityisesti data-analyysiin ja automaatioskriptien kirjoittamiseen. Kokemusta Flask- ja Django-web-kehyksistä sekä NumPy- ja Pandas-kirjastoista. Hyödynnän Pythonia myös DevOps-työkalujen kehittämisessä.',
        
        'Node.js': 'Kokemusta Node.js-backend-kehityksestä Express.js-kehyksellä. Olen toteuttanut REST API:ja ja real-time sovelluksia Socket.IO:lla. Hallitsen npm-ekosysteemin ja Node.js:n asynkronisen ohjelmoinnin periaatteet.',
        
        'SQL': 'Vahva osaaminen relaatiotietokannoista ja SQL-kyselykielestä. Kokemusta erityisesti Microsoft SQL Serveristä ja PostgreSQL:stä. Hallitsen tietokantojen suunnittelun, optimoinnin ja ylläpidon.',
        
        'Git': 'Vahva osaaminen versionhallinnasta Git-työkalulla. Hallitsen branch-strategiat, merge/rebase-toiminnot ja CI/CD-integraatiot. Kokemusta sekä GitHubin että GitLabin enterprise-käytöstä ja automatisoitujen workflowien rakentamisesta.',
        
        'Docker': 'Kokemusta konttiteknologioista ja mikropalveluarkkitehtuureista. Osaan luoda ja optimoida Docker-imageja, hallita monikonttisia ympäristöjä Docker Composella ja integroida kontteja CI/CD-putkiin.',
        
        'Azure': 'Laaja kokemus Azure-pilvipalveluista, erityisesti App Services, Azure Functions ja Azure DevOps -palveluista. Hallitsen pilvi-infrastruktuurin rakentamisen Infrastructure as Code -periaatteella ja Azure-pohjaisten sovellusten monitoroinnin.',
        
        'AWS': 'Kokemusta AWS-pilvipalveluista kuten EC2, S3, Lambda ja RDS. Ymmärrän pilvipalveluiden kustannusoptimoinnin ja skaalautuvuuden periaatteet. Osaan rakentaa serverless-arkkitehtuureja AWS:n työkaluilla.',
        
        'MongoDB': 'Kokemusta NoSQL-tietokannoista ja erityisesti MongoDB:stä. Hallitsen dokumenttipohjaisen tietomallinnuksen, aggregaatio-pipeline-operaatiot ja MongoDB Atlas -pilvipalvelun käytön.',
        
        'Linux': 'Vahva Linux-osaaminen palvelinympäristöissä. Hallitsen shell-skriptauksen, palvelinten konfiguroinnin ja ylläpidon sekä yleisimmät Linux-distribuutiot. Kokemusta myös konttien ajamisesta Linux-ympäristöissä.'
    };

    const defaultDescriptions = {
        'Frontend': 'Frontend-kehittäjänä minulla on vahva osaaminen modernien web-sovellusten rakentamisesta. Päätechnologioihini kuuluvat React.js ja Angular, joilla olen toteuttanut useita responsiivisia käyttöliittymiä. Hallitsen myös TypeScriptin ja modernin JavaScriptin käytön, sekä HTML:n ja CSS:n parhaat käytännöt.',
        'Backend': 'Backend-kehittäjänä erikoisosaamiseni on .NET-ympäristössä, missä olen toteuttanut useita web-sovelluksia C#:lla. Hallitsen myös Java- ja Python-kehityksen, sekä tietokantojen suunnittelun ja toteutuksen. REST API -rajapintojen kehittäminen ja mikropalveluarkkitehtuurit ovat tuttuja työkalupakin osia.',
        'Other': 'Hallitsen modernit DevOps-työkalut ja pilvipalvelut, erityisesti Azure- ja AWS-ympäristöt. Kokemusta löytyy konttiteknologioista (Docker), versionhallinnasta (Git) ja CI/CD-putkien rakentamisesta. NoSQL-tietokannat ja Linux-ympäristöt ovat myös osa työkalupaikkiani.',
    };

    // Skill item click handler
    document.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const skillName = item.querySelector('.skill-tag').textContent;
            const category = item.closest('.skill-category');
            const descriptionElement = category.querySelector('.skill-description p');
            const categoryName = category.querySelector('h3').textContent;
            
            // Muunnetaan kategorian nimi vastaamaan translations-objektin avainta
            const categoryKey = getCategoryKey(categoryName);
            
            // Jos klikattu item on jo aktiivinen, poistetaan aktiivinen tila ja palautetaan oletuskuvaus
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                item.style.transform = 'translateY(0)';
                // Palautetaan oletuskuvaus ja varmistetaan että se löytyy
                const defaultDescription = translations[currentLang].skills.defaultDescriptions[categoryKey];
                if (defaultDescription) {
                    descriptionElement.textContent = defaultDescription;
                } else {
                    console.warn(`Default description not found for category: ${categoryKey}`);
                }
                return;
            }

            // Poista aktiivinen tila muilta itemeilta
            category.querySelectorAll('.skill-item').forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.style.transform = 'translateY(0)';
            });

            // Lisää aktiivinen tila klikatulle itemille
            item.classList.add('active');
            item.style.transform = 'translateY(-10px)';
            
            // Näytä kuvaus valitulla kielellä
            const description = translations[currentLang].skills.skillDescriptions[skillName];
            if (description) {
                descriptionElement.textContent = description;
            } else {
                console.warn(`Description not found for skill: ${skillName}`);
                // Jos kuvausta ei löydy, näytetään oletuskuvaus
                const defaultDescription = translations[currentLang].skills.defaultDescriptions[categoryKey];
                if (defaultDescription) {
                    descriptionElement.textContent = defaultDescription;
                }
            }
        });
    });

    // Palauta oletuskuvaus kun klikataan kategorian ulkopuolelle
    document.querySelectorAll('.skill-category').forEach(category => {
        category.addEventListener('click', (e) => {
            if (e.target === category || e.target.classList.contains('skill-category')) {
                const categoryName = category.querySelector('h3').textContent;
                const descriptionElement = category.querySelector('.skill-description p');
                const categoryKey = getCategoryKey(categoryName);
                
                // Poista aktiivinen tila kaikilta kategorian itemeilta
                category.querySelectorAll('.skill-item').forEach(item => {
                    item.classList.remove('active');
                    item.style.transform = 'translateY(0)';
                });
                
                // Palauta oletuskuvaus ja varmista että se löytyy
                const defaultDescription = translations[currentLang].skills.defaultDescriptions[categoryKey];
                if (defaultDescription) {
                    descriptionElement.textContent = defaultDescription;
                } else {
                    console.warn(`Default description not found for category: ${categoryKey}`);
                }
            }
        });
    });

    // Apufunktio kategorian nimen muuntamiseen translations-objektin avaimeksi
    function getCategoryKey(categoryName) {
        const categoryMap = {
            'Frontend': 'Frontend',
            'Backend': 'Backend',
            'Muut': 'Other'  // Tämä on tärkeä mappaus
        };
        return categoryMap[categoryName] || categoryName;
    }

    // Intersection Observer
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Lopetetaan tarkkailu vain projektikorteille
                if (entry.target.classList.contains('project-card')) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    // Tarkkaillaan sekä sektioita että projektikortteja
    document.querySelectorAll('section, .project-card').forEach(element => {
        observer.observe(element);
    });

    // 3D Card Tilt Effect
    document.addEventListener('DOMContentLoaded', function() {
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseleave', handleMouseLeave);
            card.addEventListener('mouseenter', handleMouseEnter);
        });

        function handleMouseMove(e) {
            const card = e.currentTarget;
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            const mouseX = e.clientX - cardCenterX;
            const mouseY = e.clientY - cardCenterY;
            
            // Lasketaan rotation arvot
            const rotateX = (-mouseY / cardRect.height * 20).toFixed(2);
            const rotateY = (mouseX / cardRect.width * 20).toFixed(2);
            
            // Lasketaan glare-efektin sijainti
            const glareX = (mouseX / cardRect.width * 100 + 50).toFixed(2);
            const glareY = (mouseY / cardRect.height * 100 + 50).toFixed(2);

            // Päivitetään kortin transformaatiot
            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale3d(1.05, 1.05, 1.05)
            `;

            // Päivitetään sisällön transformaatiot
            const content = card.querySelector('.project-content');
            const folder = card.querySelector('.project-folder');
            const links = card.querySelector('.project-links');

            if (content) content.style.transform = `translateZ(50px)`;
            if (folder) folder.style.transform = `translateZ(60px)`;
            if (links) links.style.transform = `translateZ(40px)`;

            // Päivitetään glare-efektin sijainti
            card.style.setProperty('--glare-x', `${glareX}%`);
            card.style.setProperty('--glare-y', `${glareY}%`);
        }

        function handleMouseLeave(e) {
            const card = e.currentTarget;
            card.style.transform = `
                perspective(1000px)
                rotateX(0)
                rotateY(0)
                scale3d(1, 1, 1)
            `;
            
            const content = card.querySelector('.project-content');
            const folder = card.querySelector('.project-folder');
            const links = card.querySelector('.project-links');

            if (content) content.style.transform = 'translateZ(0)';
            if (folder) folder.style.transform = 'translateZ(0)';
            if (links) links.transform = 'translateZ(0)';
        }

        function handleMouseEnter(e) {
            const card = e.currentTarget;
            card.style.transition = 'none';
            // Poistetaan transition jotta liike on sulavaa
            setTimeout(() => {
                card.style.transition = 'transform 0.3s ease-out';
            }, 100);
        }
    });

    // Korvataan about dropdown -toiminnallisuus
    const aboutToggle = document.querySelector('.about-toggle');
    const aboutDropdown = document.querySelector('.about-dropdown');
    const aboutContent = document.querySelector('.about-content');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (aboutToggle && aboutContent) {
        // Toggle dropdown
        aboutToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            aboutContent.classList.toggle('active');
            
            // Päivitä nuoli-ikonin rotaatio
            const icon = aboutToggle.querySelector('i');
            if (icon) {
                icon.style.transform = aboutContent.classList.contains('active')
                    ? 'rotate(180deg)'
                    : 'rotate(0)';
            }

            // Aseta oletussisältö kun dropdown avataan
            if (aboutContent.classList.contains('active')) {
                const activeTab = document.querySelector('.tab-btn.active');
                const tabId = activeTab.dataset.tab;
                const content = translations[currentLang].about[tabId];
                const tabContent = document.getElementById(tabId);
                if (tabContent && content) {
                    tabContent.textContent = content;
                }
            }
        });

        // Sulje dropdown kun klikataan sen ulkopuolelle
        document.addEventListener('click', (e) => {
            if (!aboutDropdown.contains(e.target)) {
                aboutContent.classList.remove('active');
                const icon = aboutToggle.querySelector('i');
                if (icon) {
                    icon.style.transform = 'rotate(0)';
                }
            }
        });

        // Välilehdet
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Poista active-luokka kaikilta välilehdiltä ja sisällöiltä
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Lisää active-luokka klikatulle välilehdelle
                btn.classList.add('active');
                
                // Hae ja päivitä sisältö käännöksistä
                const tabId = btn.dataset.tab;
                const content = translations[currentLang].about[tabId];
                const tabContent = document.getElementById(tabId);
                
                if (tabContent && content) {
                    tabContent.textContent = content;
                    tabContent.classList.add('active');
                }
            });
        });
    }

    // Kielenvaihtologiikka
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = 'fi'; // Oletuskieli suomi

    function updateContent(lang) {
        currentLang = lang;

        // Päivitä kaikki käännökset
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            const keys = key.split('.');
            let translation = translations[lang];
            
            try {
                keys.forEach(k => {
                    if (translation) {
                        translation = translation[k];
                    }
                });
                
                if (translation) {
                    element.textContent = translation;
                }
            } catch (error) {
                console.warn(`Translation missing for key: ${key}`);
            }
        });

        // Päivitä nappien aktiivinen tila
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Päivitä dokumentin kieli
        document.documentElement.lang = lang;
        
        // Päivitä title-elementti
        document.title = lang === 'fi' ? 'Portfolio CV' : 'Portfolio CV - EN';

        // Päivitä about-korttien sisältö
        document.querySelectorAll('.about-card').forEach(card => {
            const contentP = card.querySelector('.about-card-content p');
            if (contentP) {
                const key = contentP.getAttribute('data-translate');
                if (key) {
                    contentP.textContent = translations[lang].about[key.split('.').pop()];
                }
            }
        });

        // Päivitä skill-kategorioiden kuvaukset
        document.querySelectorAll('.skill-category').forEach(category => {
            const categoryName = category.querySelector('h3').textContent;
            const descriptionElement = category.querySelector('.skill-description p');
            const categoryKey = getCategoryKey(categoryName);
            
            const activeSkill = category.querySelector('.skill-item.active');
            if (activeSkill) {
                const skillName = activeSkill.querySelector('.skill-tag').textContent;
                const skillDescription = translations[lang].skills.skillDescriptions[skillName];
                if (skillDescription) {
                    descriptionElement.textContent = skillDescription;
                }
            } else {
                const defaultDescription = translations[lang].skills.defaultDescriptions[categoryKey];
                if (defaultDescription) {
                    descriptionElement.textContent = defaultDescription;
                }
            }
        });

        // Alustetaan projektilinkkien tekstit
        initializeProjectLinks();
    }

    // Lisää click event listener kielinapeille
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLang) {
                updateContent(lang);
            }
        });
    });

    // Asetetaan suomi-nappi aktiiviseksi oletuksena
    document.querySelector('[data-lang="fi"]').classList.add('active');

    // Lisätään muutama apufunktio kielenvaihtoa varten
    window.switchLanguage = (lang) => {
        if (lang !== currentLang) {
            updateContent(lang);
        }
    };

    function initializeTouchEvents() {
        const cards = document.querySelectorAll('.project-card');
        let selectedCard = null;
        
        // Poistetaan vanhat touch eventit
        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Jos klikataan suoraan linkkiä, ei tehdä mitään
                if (e.target.closest('.github-link')) {
                    return;
                }
                
                e.preventDefault();
                e.stopPropagation();
                
                // Jos kortti on jo valittu, poistetaan valinta
                if (selectedCard === card) {
                    selectedCard = null;
                    card.classList.remove('selected');
                    return;
                }
                
                // Poistetaan aiempi valinta
                if (selectedCard) {
                    selectedCard.classList.remove('selected');
                }
                
                // Valitaan uusi kortti
                selectedCard = card;
                card.classList.add('selected');
            });
        });

        // Lisätään GitHub-linkeille omat eventit
        document.querySelectorAll('.github-link').forEach(link => {
            link.addEventListener('click', (e) => {
                // Jos korttia ei ole valittu mobiililla, estetään linkin avautuminen
                if (window.innerWidth <= 768 && !link.closest('.project-card').classList.contains('selected')) {
                    e.preventDefault();
                    return;
                }
                
                // Muuten avataan linkki normaalisti
                if (link.href) {
                    window.open(link.href, '_blank');
                }
            });
        });
        
        // Lisätään click event dokumentille sulkemaan valinta kun klikataan muualle
        document.addEventListener('click', (e) => {
            if (selectedCard && !e.target.closest('.project-card')) {
                selectedCard.classList.remove('selected');
                selectedCard = null;
            }
        });
    }

    // Kutsutaan touch-eventien alustusta
    initializeTouchEvents();

    // Seuraa scrollausta ja päivitä aktiivinen linkki
    function updateActiveSection() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.header nav a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) { // 150px offset ennen section vaihtoa
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Lisää scrolled-luokka headeriin kun scrollataan
    function updateHeader() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Kuuntele scroll-tapahtumaa
    window.addEventListener('scroll', () => {
        updateActiveSection();
        updateHeader();
    });

    // Päivitä myös sivun latautuessa
    document.addEventListener('DOMContentLoaded', () => {
        updateActiveSection();
        updateHeader();
    });

    // About card functionality
    function initializeAboutCards() {
        const aboutCards = document.querySelectorAll('.about-card');
        
        // Alusta tekstisisällöt heti
        aboutCards.forEach(card => {
            const contentP = card.querySelector('.about-card-content p');
            if (contentP) {
                const key = contentP.getAttribute('data-translate');
                if (key) {
                    contentP.textContent = translations[currentLang].about[key.split('.').pop()];
                }
            }
        });

        // Lisää click event dokumentille sulkemista varten
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.about-card')) {
                aboutCards.forEach(card => {
                    card.classList.remove('active');
                });
            }
        });

        aboutCards.forEach(card => {
            const toggle = card.querySelector('.about-card-toggle');
            if (toggle) {
                toggle.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const wasActive = card.classList.contains('active');
                    
                    // Sulje kaikki kortit
                    aboutCards.forEach(c => c.classList.remove('active'));
                    
                    // Jos kortti ei ollut aktiivinen, avaa se
                    if (!wasActive) {
                        card.classList.add('active');
                    }
                });
            }
        });
    }

    // Alusta kortit
    initializeAboutCards();

    // Alustetaan projektilinkkien tekstit
    function initializeProjectLinks() {
        document.querySelectorAll('.github-link span').forEach(span => {
            const key = span.getAttribute('data-translate');
            if (key) {
                span.textContent = translations[currentLang].projects.viewProject;
            }
        });
    }

    // Kutsutaan alustusta heti sivun latautuessa
    initializeProjectLinks();
});