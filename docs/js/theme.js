var currentTheme = 0;

function switchTheme() {
    const themesList = ['neuracr', 'dark', 'maua', 'azgheda'];
    const cssVarList = ['primary-color', 'accent-color', 'background-color', 'dark-background-color', 'font-color', 'light-font-color', 'main-font-family', 'title-font-family'];
    

    cssVarList.forEach(function(cssVar){
        document.documentElement.style.setProperty(
            '--' + cssVar,
            getComputedStyle(document.documentElement).getPropertyValue(
                '--' + themesList[currentTheme + 1] + '-' + cssVar
            )
        );
    });
    if (currentTheme < themesList.length) {
        currentTheme = currentTheme + 1;
    } else {
        currentTheme = 0;
    }
}
