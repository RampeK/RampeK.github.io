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
        'Frontend': 'Frontend-kehittäjänä minulla on vahva osaaminen modernien web-sovellusten rakentamisessa. Päätechnologioihini kuuluvat React.js ja Angular, joilla olen toteuttanut useita responsiivisia käyttöliittymiä. Hallitsen myös TypeScriptin ja modernin JavaScriptin käytön, sekä HTML:n ja CSS:n parhaat käytännöt.',
        'Backend': 'Backend-kehittäjänä erikoisosaamiseni on .NET-ympäristössä, missä olen toteuttanut useita web-sovelluksia C#:lla. Hallitsen myös Java- ja Python-kehityksen, sekä tietokantojen suunnittelun ja toteutuksen. REST API -rajapintojen kehittäminen ja mikropalveluarkkitehtuurit ovat tuttuja työkalupakin osia.',
        'Other': 'Hallitsen modernit DevOps-työkalut ja pilvipalvelut, erityisesti Azure- ja AWS-ympäristöt. Kokemusta löytyy konttiteknologioista (Docker), versionhallinnasta (Git) ja CI/CD-putkien rakentamisesta. NoSQL-tietokannat ja Linux-ympäristöt ovat myös osa työkalupaikkiani. Kyberturvallisuus ja järjestelmien skaalautuvuus ovat lähellä sydäntäni.'
    };

    // Skill item click handler
    document.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const skillName = item.querySelector('.skill-tag').textContent;
            const category = item.closest('.skill-category');
            const descriptionElement = category.querySelector('.skill-description p');
            
            // Poista aktiivinen tila muilta itemeilta
            category.querySelectorAll('.skill-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.style.transform = 'translateY(0)';
                }
            });

            // Lisää aktiivinen tila klikatulle itemille
            item.classList.toggle('active');
            
            // Näytä kuvaus valitulla kielellä
            const description = translations[currentLang].skills.skillDescriptions[skillName];
            
            if (description) {
                descriptionElement.style.opacity = '0';
                setTimeout(() => {
                    descriptionElement.textContent = description;
                    descriptionElement.style.opacity = '1';
                }, 200);
            }
            
            // Animoi klikattu item
            if (item.classList.contains('active')) {
                item.style.transform = 'translateY(-10px)';
            } else {
                item.style.transform = 'translateY(0)';
            }
        });
    });

    // Palauta oletuskuvaus kun klikataan kategorian ulkopuolelle
    document.querySelectorAll('.skill-category').forEach(category => {
        category.addEventListener('click', (e) => {
            if (e.target === category || e.target.classList.contains('skill-category')) {
                const categoryName = category.querySelector('h3').textContent;
                const descriptionElement = category.querySelector('.skill-description p');
                
                // Poista aktiivinen tila kaikilta kategorian itemeilta
                category.querySelectorAll('.skill-item').forEach(item => {
                    item.classList.remove('active');
                    item.style.transform = 'translateY(0)';
                });
                
                // Palauta oletuskuvaus aktiivisella kielellä
                descriptionElement.style.opacity = '0';
                setTimeout(() => {
                    descriptionElement.textContent = translations[currentLang].skills.defaultDescriptions[categoryName];
                    descriptionElement.style.opacity = '1';
                }, 200);
            }
        });
    });

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

    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const homeSection = document.querySelector('#home');

    if (scrollIndicator && homeSection) {
        window.addEventListener('scroll', () => {
            const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
            
            if (window.scrollY > homeSectionBottom - window.innerHeight / 2) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }

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

    // About dropdown functionality
    const aboutToggle = document.querySelector('.about-toggle');
    const aboutContent = document.querySelector('.about-content');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    aboutToggle.addEventListener('click', () => {
        aboutContent.classList.toggle('active');
        aboutToggle.querySelector('i').style.transform = 
            aboutContent.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.about-dropdown')) {
            aboutContent.classList.remove('active');
            aboutToggle.querySelector('i').style.transform = 'rotate(0)';
        }
    });

    // Tab functionality
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

    // Kielenvaihtologiikka
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = 'fi'; // Oletuskieli suomi

    function updateContent(lang) {
        // Päivitetään kaikki tekstisisältö käännösten mukaan
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
                    // Tarkistetaan onko elementillä lapsia
                    if (element.children.length > 0 && element.children[0].tagName === 'SPAN') {
                        // Jos on span-elementti accent-pistettä varten
                        const accentSpan = element.querySelector('.accent');
                        element.textContent = translation;
                        if (accentSpan) {
                            element.appendChild(accentSpan);
                        }
                    } else {
                        element.textContent = translation;
                    }
                }
            } catch (error) {
                console.warn(`Translation missing for key: ${key}`);
            }
        });

        // Päivitetään nappien aktiivinen tila
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Päivitetään dokumentin kieli
        document.documentElement.lang = lang;
        
        // Päivitetään title-elementti
        document.title = lang === 'fi' ? 'Portfolio CV' : 'Portfolio CV - EN';

        currentLang = lang;

        // Päivitetään kategorioiden oletuskuvaukset
        document.querySelectorAll('.skill-category').forEach(category => {
            const categoryName = category.querySelector('h3').textContent;
            const descriptionElement = category.querySelector('.skill-description p');
            
            // Haetaan oletuskuvaus uudella kielellä
            const defaultDescription = translations[lang].skills.defaultDescriptions[categoryName];
            if (defaultDescription) {
                descriptionElement.textContent = defaultDescription;
            }
        });

        // Päivitetään aktiivisen teknologian kuvaus, jos sellainen on
        document.querySelectorAll('.skill-item.active').forEach(item => {
            const skillName = item.querySelector('.skill-tag').textContent;
            const category = item.closest('.skill-category');
            const descriptionElement = category.querySelector('.skill-description p');
            
            // Haetaan teknologian kuvaus uudella kielellä
            const description = translations[lang].skills.skillDescriptions[skillName];
            if (description) {
                descriptionElement.textContent = description;
            }
        });
    }

    // Lisätään click event listener kielinapeille
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
        
        cards.forEach(card => {
            card.addEventListener('touchstart', handleTouchStart, { passive: true });
            card.addEventListener('touchmove', handleTouchMove, { passive: true });
            card.addEventListener('touchend', handleTouchEnd);
        });
    }

    function handleTouchStart(e) {
        const card = e.currentTarget;
        card.classList.add('touch-active');
    }

    function handleTouchMove(e) {
        e.preventDefault(); // Estä scrollaus korttia koskettaessa
    }

    function handleTouchEnd(e) {
        const card = e.currentTarget;
        card.classList.remove('touch-active');
        
        // Avaa linkki vain jos korttia ei ole liikutettu
        if (card.hasAttribute('onclick')) {
            const url = card.getAttribute('onclick').match(/'([^']+)'/)[1];
            window.open(url, '_blank');
        }
    }

    // Lisää kutsu DOMContentLoaded-tapahtumankäsittelijään
    initializeTouchEvents();
});