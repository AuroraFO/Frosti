(function () {
    const storedTheme = localStorage.getItem("theme");
    const userPreferredTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches
        ? "dracula"
        : "winter";
    const theme = storedTheme || userPreferredTheme;
    document.documentElement.setAttribute("data-theme", theme);
})();

function setThemeByTime() {
    const hour = new Date().getHours();
    let theme;

    if (hour >= 6 && hour < 18) {
        theme = "dracula"; // 白天
    } else if (hour >= 18 && hour < 21) {
        theme = "winter"; // 傍晚
    } else {
        theme = "dracula"; // 夜晚
    }

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

// 初始加载时调用一次
setThemeByTime();