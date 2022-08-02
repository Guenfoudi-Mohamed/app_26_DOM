// app_25

const checkTheme = document.querySelector('body #container .checkTheme .inpChange');
checkTheme.onclick = function(){
    const DarkMode = document.querySelector('body .DarkModeBlack');
    DarkMode.classList.toggle('ActiveDark');
    if(DarkMode.classList.contains('ActiveDark')){
        document.documentElement.style.setProperty('--translateX','33px');            
        document.documentElement.style.setProperty('--backgroundCheckTheme','rgb(193, 127, 227)');            
        document.documentElement.style.setProperty('--BeforeColor','#fff');            
        document.documentElement.style.setProperty('--backGroundColor','rgb(193, 127, 227)');   
        document.documentElement.style.setProperty('--colorBorder','#fff');   
    }
    else{
        document.documentElement.style.setProperty('--translateX','0px');
        document.documentElement.style.setProperty('--backgroundCheckTheme','rgb(231, 231, 231)');            
        document.documentElement.style.setProperty('--BeforeColor','#000');
        document.documentElement.style.setProperty('--backGroundColor','yellow');            
        document.documentElement.style.setProperty('--colorBorder','#000');   
    }    
}
