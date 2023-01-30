// tudo que se refere a classes 

const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop')
const buttonMore = document.querySelector('.more');
const buttonLess = document.querySelector('.less');
const buttonForestSound = document.querySelector('.forest');
const buttonFireplaceSound = document.querySelector('.fireplace');
const buttonRainSound = document.querySelector('.rain');
const buttonCoffeSound = document.querySelector('.coffe_shopp');
const inputForestSound = document.querySelector('#vol_forest');
const inputFireplaceSound = document.querySelector('#vol_fireplace');
const inputRainSound = document.querySelector('#vol_rain');
const inputCoffeSound = document.querySelector('#vol_coffe');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const buttonLightTheme = document.querySelector('#sun-icon');
const buttonDarkTheme = document.querySelector('#moon-icon');
const theme = document.querySelector('#dark');

export{
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonMore,
    buttonLess,
    buttonForestSound,
    buttonFireplaceSound,
    buttonRainSound,
    buttonCoffeSound,
    buttonLightTheme,
    buttonDarkTheme,
    minutesDisplay,
    secondsDisplay,
    inputForestSound,
    inputFireplaceSound,
    inputRainSound,
    inputCoffeSound,
    theme,
}