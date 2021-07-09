import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            es: {
                translation: {
                    navigationMenu: {
                        about: 'Sobre mí',
                        aptitudes: 'Aptitudes',
                        skills: 'Habilidades',
                        jobs: 'Desarrollos',
                        contact: 'Contáctame!'
                    },
                    aboutSection: {
                        title1: "Hola! que tal?,",
                        title2: "Me llamo Jorge Fernández.",
                        // title1: "<span style='font-size: 2rem; font-weight: bold; color: #FF7043'>Hola! que tal?,</span>",
                        // title2: "<span style='font-size: 2rem; font-weight: bold; color: #FF7043'>Me llamo Jorge Fernández.</span>",
                        subtitle: "<span style='font-size: 1.2rem; font-weight: bold'>Y me encanta realizar actividades como desarrollador full-stack ❤️!</span>",
                        networks: "Sígueme en las redes sociales.",
                        content: `Vamos! recorre el sitio y conoce un poco mas sobre mi, o si prefieres descarga mi CV clickando en el botón ubicado
                            en la esquina inferior derecha de la tarjeta. Yey! 😄`,
                        downloadButton: "Descargar CV",
                    },
                    personality: {
                        title: "Mi personalidad",
                        card1: "Proactividad",
                        card2: "Creatividad",
                        card3: "Entusiasta",
                        card4: "Actitud Positiva",
                        card5: "Comunicación",
                        card6: "Liderazgo",
                        card7: "Trabajo en equipo",
                        card8: "Responsabilidad",
                        card9: "Honestidad",
                        card10: "Capacidad de aprendizaje",
                        card11: "Bebedor de café",
                    },
                    skills: {
                        title: "Mis habilidades",
                        card1: "NodeJs orientado al desarro web",
                        card2: "Express para el desarrollo de apis rest",
                        card3: "JavaScript ES6",
                        card4: "TypeScript para mejor desarrollo en Js",
                        card5: "Graphql para mejor manejo de la data y evitar la sobrecarga durante el retorno de las peticiones a las apis",
                        card6: "RectJs con clases y hooks, haciendo cosas funcionales sobre la web",
                        card7: "Redux para ReactJs, elaborando una útil y única fuente de la verdad",
                        card8: "HTML5, todo el mundo debería conocer de html5 :D",
                        card9: "CSS3 tradicional al igual que librerías y frameworks como tailwind y bootstrap",
                        card10: "PHP tradicional y frameworks comunes como laravel y cms como WordPress",
                        card11: "Manejo de bases de datos relacionales y no relacionales",
                    },
                    works: {
                        title: "Mi trabajo",
                    },
                    contact: {
                        title: "Contáctame!",
                        subtitle: "Deja tu mensaje!",
                        radio1: "Háblame",
                        radio2: "Obtén una cotización",
                        sendButton: "Enviar!",
                    },
                }
            },
            en: {
                translation: {
                    navigationMenu: {
                        about: 'About me',
                        aptitudes: 'Aptitudes',
                        skills: 'Skills',
                        jobs: 'My work',
                        contact: 'Get in touch'
                    },
                    aboutSection: {
                        title1: "What's up! yo,",
                        title2: "I'm Jorge Fernández.",
                        // title1: "<span style='font-size: 2rem; font-weight: bold; color: #FF7043'>What's up! yo,</span>",
                        // title2: "<span style='font-size: 2rem; font-weight: bold; color: #FF7043'>I'm Jorge Fernández.</span>",
                        networks: "Follow me on social networks.",
                        subtitle: "<span style='font-size: 1.2rem; font-weight: bold'>And I ❤️ doing stuff as fullstack developer!</span>",
                        content: `C'mon, scroll down and know more about me, or if you are lazy one download my cv clicking on the right side
                            bottom corner button. Cheers 😄`,
                        downloadButton: "Download CV",
                    },
                    personality: {
                        title: "My personality",
                        card1: "Proactivity",
                        card2: "Creativity",
                        card3: "Enthusiastic",
                        card4: "Positive attitude",
                        card5: "Comunication",
                        card6: "Leadership",
                        card7: "Teamwork",
                        card8: "Responsability",
                        card9: "Honestity",
                        card10: "Capacity of learn",
                        card11: "Coffee drinker",
                    },
                    skills: {
                        title: "My coding skills",
                        card1: "NodeJs oriented to web development",
                        card2: "Express for rest api development",
                        card3: "JavaScript ES6",
                        card4: "TypeScript for better js development",
                        card5: "Graphql for better data management and avoid overfetch",
                        card6: "RectJs working with classes and/or hooks, making functional things on web",
                        card7: "Redux for ReactJs, making usefull unique source of truth",
                        card8: "HTML5, everybody should know about html5 :D",
                        card9: "CSS3 vanilla as well working with libraries and frameworks like tailwind and bootstrap",
                        card10: "PHP vanilla and common frameworks like laravel as well cms like wordpress",
                        card11: "Relational and no-Relational database management",
                    },
                    works: {
                        title: "My work",
                    },
                    contact: {
                        title: "Get in touch",
                        subtitle: "CONTACT ME",
                        radio1: "Talk to me",
                        radio2: "Get a Quote",
                        sendButton: "Send!",
                    },
                }
            },
        }
    });

export default i18n;