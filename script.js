document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");
    const languageSelect = document.getElementById("language");

    const setTheme = (mode) => {
        body.classList.toggle("light-mode", mode === "light");
        themeToggle.innerHTML = mode === "light" ? "🌙" : "☀️";
        localStorage.setItem("theme", mode);
    };

    setTheme(localStorage.getItem("theme") || "dark");

    themeToggle.addEventListener("click", () =>
        setTheme(body.classList.contains("light-mode") ? "dark" : "light")
    );

    const translations = {
        en: {
            title: "Portfolio VERHUST Vincent",
            about: "Bio",
            project: "Projects",
            aboutText: `Hi, I’m Vincent.
<br><br>
I worked in IT as a technician, where I handled customer support and server administration.
<br><br>
I enjoy solving problems, taking on challenges and finding effective solutions.
<br><br>
With Le Wagon I decided to upskill with data analytics and follow their bootcamp because I believe data is at the heart of every company and it’s a powerful asset for business decision.
<br><br>
My main strength is my background in IT, it gives me a solid foundation to understand the complexity of infrastructures, systems and computer languages and therefore analyze data effectively, I also actively keep up with the newest technologies and trends to maintain my expertise.
<br><br>
IT and data form the two pillars of digital performance: one provides the technical foundations, the other generates strategic impact.
`,
            theme: "Dark Mode",
            language_spoken: "English, French",
            hire: "Available for hire",
            where: "Nantes, France",
            how: "Remote, Hybrid, On-site",
            contact: "Contact",
            title_p1: "Nginx Project",
            title_p2: "Monitoring Project",
            title_p3: "Security, Network & Firewall Project",
            title_p4: "Airbnb Paris Project",
            title_p5: "TheLook eCommerce Project",
            title_p6: "Real Estate Profitability Project in France"
        },
        fr: {
            title: "Portfolio VERHUST Vincent",
            about: "Bio",
            project: "Projets",
            aboutText: `Bonjour, je m'appelle Vincent.
<br><br>
J'ai travaillé dans l'informatique en tant que technicien systèmes et réseaux, où je m'occupais du support client et de l'administration des serveurs.
<br><br>
J'aime résoudre des problèmes, relever des défis et trouver des solutions efficaces.
<br><br>
Avec Le Wagon, j’ai décidé de monter en compétences avec l'analyse de données et de suivre leur bootcamp car je suis convaincu que les données sont au cœur de toute entreprise et qu’elles constituent un atout majeur pour la prise de décision.
<br><br>
Mon principal atout réside dans mon expérience en informatique. Elle me permet de comprendre la complexité des infrastructures, des systèmes et des langages informatiques, et donc d'analyser efficacement les données. Je me tiens également informé des dernières technologies et tendances pour maintenir mon expertise.
<br><br>
L'informatique et les données constituent les deux piliers de la performance numérique : l'une fournit les bases techniques, l'autre génère un impact stratégique.
`,
            theme: "Mode sombre",
            language_spoken: "Anglais, Français",
            hire: "Disponible à l'embauche",
            where: "Nantes, France",
            how: "Remote, Hybride, Sur site",
            contact: "Contact",
            title_p1: "Projet Nginx",
            title_p2: "Projet Supervision",
            title_p3: "Projet Sécurité, Réseaux & Pare-feu",
            title_p4: "Airbnb Paris Project",
            title_p5: "TheLook eCommerce Project",
            title_p6: "Projet Rentabilité Immobilière en France"
        }
    };

    const changeLanguage = (lang) => {
        document.querySelectorAll("[data-lang]").forEach(el => {
            const key = el.getAttribute("data-lang");
            if (translations[lang][key]) el.innerHTML = translations[lang][key];
        });
        localStorage.setItem("lang", lang);
    };

    const lang = localStorage.getItem("lang") || "en";
    languageSelect.value = lang;
    changeLanguage(lang);

    languageSelect.addEventListener("change", e => changeLanguage(e.target.value));
});
