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
I am a student at Le Wagon in the Data Analyst bootcamp.
<br><br>
Before this, I worked in IT as a technician, where I handled customer support and server administration.
<br><br>
I am organized, rigorous and also i am someone who is calm under pressure as i was a security agent before switching to IT.
<br><br>
I decided to upskill with data analytics because I believe data is at the heart of every company and it’s a powerful asset for business decision.
<br><br>
My main strength is my background in IT, it gives me a solid foundation to understand the complexity of infrastructures, systems and computer languages and therefore analyze data effectively.`,
            contact: "Contact",
            email: "Your email:",
            message: "Your message:",
            send: "Send",
            theme: "Dark Mode"
        },
        fr: {
            title: "Portfolio VERHUST Vincent",
            about: "Bio",
            project: "Projets",
            aboutText: `Salut c'est Vincent.
<br><br>
Je suis étudiant au Wagon en formation Data Analyst.
<br><br>
Avant de commencer cette formation, j'ai travaillé dans l'informatique en tant que technicien systèmes et réseaux, où je m'occupais du support client et de l'administration des serveurs.
<br><br>
Je suis organisé, rigoureux et je sais aussi garder mon calme sous la pression comme je me suis formé en tant qu'agent de sécurité avant de me reconvertir dans l'informatique.
<br><br>
J'ai décidé de monter en compétences avec l'analyse de données car je suis convaincu que les données sont au cœur de toute entreprise et qu'elles constituent un atout majeur pour la prise de décision.
<br><br>
Mon principal atout réside dans mon expérience en informatique. Elle me permet de comprendre la complexité des infrastructures, des systèmes et des langages informatiques, et donc d'analyser efficacement les données.`,
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
