// app_25

const checkTheme = document.querySelector('body #container .checkTheme .inpChange');
checkTheme.onclick = function(){
    const DarkMode = document.querySelector('body .DarkMode');
    DarkMode.classList.toggle('ActiveDark');
    if(DarkMode.classList.contains('ActiveDark')){
        checkTheme.style.setProperty('--translateX','33px');    
    }
    else{
        checkTheme.style.setProperty('--translateX','0px');
    }
    // const checkThemeOfBefore = window.getComputedStyle 'get property value css3'
    
}
