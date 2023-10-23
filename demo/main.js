import "./style.css";

const changeTheme = () => {
    const themes = ["light", "hw"];

    themes.forEach((theme) => {
        document.documentElement.classList.remove(theme);
    });

    const theme = themes[Math.floor(Math.random() * themes.length)];
    document.documentElement.classList.add(theme);
};

const changeThemeButton = document.getElementById("change-theme");
changeThemeButton.addEventListener("click", changeTheme);
