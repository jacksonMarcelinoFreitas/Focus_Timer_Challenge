import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
    // buttonPause,
    // buttonPlay,
    // buttonStop,
    // buttonMore,
    // buttonLess,
    // minutesDisplay,
    // secondsDisplay,
    // buttonDarkTheme,
    // buttonLightTheme
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonMore,
    buttonLess,
    // buttonForestSound,
    // buttonFireplaceSound,
    // buttonRainSound,
    // buttonCoffeSound,
    buttonLightTheme,
    buttonDarkTheme,
    theme,
    minutesDisplay,
    secondsDisplay
    // inputForestSound,
    // inputFireplaceSound,
    // inputRainSound,
    // inputCoffeSound 
} from "./elements.js"

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonMore,
    buttonLess,
    buttonDarkTheme,
    buttonLightTheme,
    theme
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset 
})

const sound = Sound()

Events({controls, timer, sound})






