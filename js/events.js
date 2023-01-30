import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonMore,
    buttonLess,
    buttonForestSound,
    buttonFireplaceSound,
    buttonRainSound,
    buttonCoffeSound,
    inputForestSound,
    inputRainSound,
    inputFireplaceSound,
    inputCoffeSound,
    buttonLightTheme,
    buttonDarkTheme,
    theme
} from "./elements.js"

export default function({controls, timer, sound}){

    buttonPlay.addEventListener('click', function(){
        controls.play()
        timer.countDown()
        sound.pressButton()
    })

    buttonPause.addEventListener('click', function(){
        controls.pause()
        timer.hold()
        sound.pressButton()
    })

    buttonStop.addEventListener('click', function(){
        controls.reset()
        timer.reset()
        sound.pressButton()
    })

    buttonMore.addEventListener('click', function(){
        sound.pressButton()
        timer.setMinutes(1)
        timer.hold()
        controls.reset()
    })

    buttonLess.addEventListener('click', function(){
        sound.pressButton()
        timer.setMinutes(2)
        timer.hold()
        controls.reset()
    })

    // FOREST
    buttonForestSound.addEventListener('click', function(){
        sound.pressButton()
        sound.pressForestButton()
    })

    inputForestSound.addEventListener('click', function(){
        sound.setVolume(1, inputForestSound) 
    })

    // RAIN
    buttonRainSound.addEventListener('click', function(){
        sound.pressButton()
        sound.pressRainButton()
    })
    
    inputRainSound.addEventListener('click', function(){
        sound.setVolume(2, inputRainSound) 
    })
    
    // FIREPLACE
    buttonFireplaceSound.addEventListener('click', function(){
        sound.pressButton()
        sound.pressFirePlaceButton()
    })

    inputFireplaceSound.addEventListener('click', function(){
        sound.setVolume(3, inputFireplaceSound) 
    })

    // COFFEE
    buttonCoffeSound.addEventListener('click', function(){
        sound.pressButton()
        sound.pressCoffeButton()
    })

    inputCoffeSound.addEventListener('click', function(){
        sound.setVolume(4, inputCoffeSound) 
    })

    buttonDarkTheme.addEventListener('click', function(){
        controls.themeDark()
    })

    buttonLightTheme.addEventListener('click', function(){
        controls.themeLight()
    })

}


