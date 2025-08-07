document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const languageSelect = document.getElementById("language");

    // 🌙 Gestion du Thème Clair / Sombre
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.innerHTML = "🌙"; // Icône du soleil en mode clair
    } else {
        themeToggle.innerHTML = "☀️"; // Icône de la lune en mode sombre
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        // Sauvegarder le thème dans le localStorage
        localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");

        // Mettre à jour l'icône en fonction du mode
        if (body.classList.contains("light-mode")) {
            themeToggle.innerHTML = "🌙"; // Icône pour passer en mode sombre
        } else {
            themeToggle.innerHTML = "☀️"; // Icône pour passer en mode clair
        }
    });

    // 🌍 Traductions FR / EN
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

    function changeLanguage(lang) {
        document.querySelectorAll("[data-lang]").forEach(el => {
            const key = el.getAttribute("data-lang");
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        localStorage.setItem("lang", lang);
    }

    // 🔄 Applique la langue sauvegardée ou défaut à FR
    const savedLang = localStorage.getItem("lang") || "fr";
    languageSelect.value = savedLang;
    changeLanguage(savedLang);

    // 🎛️ Écouteur pour changer la langue
    languageSelect.addEventListener("change", (event) => {
        changeLanguage(event.target.value);
    });
});
