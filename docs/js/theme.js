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
    var currentTheme = 0;
    if (!isNaN(currentThemeStr)) {
        currentTheme = parseInt(currentThemeStr);
    }
    
    setTheme(currentTheme + 1);

    if (currentTheme < themesList.length) {
        currentTheme = currentTheme + 1;
    } else {
        currentTheme = 0;
    }
    localStorage.setItem('currentTheme', currentTheme);
}
