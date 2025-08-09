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
            about: "About",
            project: "Projects",
            aboutText: "With experience in IT and systems & networks, I have skills in web development as well as database management and systems and network administration. <br><br> Thanks to my work-study experiences, I have acquired a methodical approach to solving technical problems and server administration. I have also worked on projects such as setting up NGINX servers, monitoring and securing network infrastructures. <br><br> Passionate about development and new technologies, I am looking to join a company as a full stack developer, where I can continue to develop my skills and contribute effectively to ongoing projects.",
            skills: "Skills",
            contact: "Contact",
            email: "Your email:",
            message: "Your message:",
            send: "Send",
            theme: "Dark Mode"
        },
        fr: {
            title: "Portfolio VERHUST Vincent",
            about: "À propos",
            project: "Projets",
            aboutText: " VOIR FICHIER INDEX.HTML POUR LES MODIF a faire sur les projets académiques/projets Fort d’une expérience en IT et en systèmes & réseaux, je possède des compétences en développement web ainsi qu’en gestion de bases de données et en administration systèmes et réseaux. <br><br> Grâce à mes expériences en alternance, j’ai acquis une approche méthodique dans la résolution de problèmes techniques et l’administration de serveurs. J’ai également travaillé sur des projets tels que la mise en place de serveurs NGINX, la supervision et la sécurisation d’infrastructures réseaux. <br><br> Passionné par le développement et les nouvelles technologies, je cherche à intégrer une entreprise en tant que développeur full stack, où je pourrai continuer à monter en compétences et contribuer efficacement aux projets en cours.",
            skills: "Compétences",
            contact: "Contact",
            email: "Votre email :",
            message: "Votre message :",
            send: "Envoyer",
            theme: "Mode sombre"
        }
    };

    const changeLanguage = (lang) => {
        document.querySelectorAll("[data-lang]").forEach(el => {
            const key = el.getAttribute("data-lang");
            if (translations[lang][key]) el.innerHTML = translations[lang][key];
        });
        localStorage.setItem("lang", lang);
    };

    const lang = localStorage.getItem("lang") || "fr";
    languageSelect.value = lang;
    changeLanguage(lang);

    languageSelect.addEventListener("change", e => changeLanguage(e.target.value));
});
