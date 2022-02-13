const themesList = ['neuracr', 'dark', 'maua', 'azgheda'];
const cssVarList = ['primary-color', 'accent-color', 'background-color', 'dark-background-color', 'font-color', 'light-font-color', 'main-font-family', 'title-font-family'];
const currentThemeStr = localStorage.getItem('currentTheme');
if (!isNaN(currentThemeStr)) {
    setTheme(currentThemeStr);
}

function setTheme(themePosition) {
    cssVarList.forEach(function(cssVar){
        document.documentElement.style.setProperty(
            '--' + cssVar,
            getComputedStyle(document.documentElement).getPropertyValue(
                '--' + themesList[themePosition] + '-' + cssVar
            )
        );
    });
}

function switchTheme() {
    const currentThemeStr = localStorage.getItem('currentTheme');
    const nextTheme = !isNaN(currentThemeStr) ? (parseInt(currentThemeStr) + 1) % themesList.length : 0
    setTheme(nextTheme);
    localStorage.setItem('currentTheme', nextTheme);
}
