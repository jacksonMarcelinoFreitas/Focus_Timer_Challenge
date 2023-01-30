import { inputForestSound, inputCoffeSound, inputRainSound, inputFireplaceSound } from "./elements.js"

export default function(){
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const forestAudio = new Audio("assets/forest.wav")
    const rainAudio = new Audio("assets/rain.wav")
    const fireplaceAudio = new Audio("assets/fireplace.wav")
    const coffeAudio = new Audio("assets/coffe_shopp.wav")

    let soundsOff = (soundOne, soundTwo, soundThree) => {
        soundOne.pause()
        soundTwo.pause()
        soundThree.pause()
    }

    let checkIfIsPlaying = (sound) => {
        if (sound.paused) {
            sound.play();
            sound.loop = true;
        } else {
            sound.pause();
            sound.currentTime = 0;
        }
    }

    function pressButton() {
        buttonPressAudio.play()
    }


    function setVolume(sound, input){
        if (sound == 1){
            forestAudio.volume = input.value / 100
        }else if (sound == 2){
            rainAudio.volume = input.value / 100
        }else if (sound == 3) {
            fireplaceAudio.volume = input.value / 100
        }else{
            coffeAudio.volume = input.value / 100
        }
    }

    function pressForestButton() {
        soundsOff(rainAudio, fireplaceAudio, coffeAudio)
        checkIfIsPlaying(forestAudio)
    }

    function pressRainButton() {
        soundsOff(forestAudio, fireplaceAudio, coffeAudio)
        checkIfIsPlaying(rainAudio)
    }

    function pressFirePlaceButton() {
        soundsOff(forestAudio, rainAudio, coffeAudio)
        checkIfIsPlaying(fireplaceAudio)
    }
    
    function pressCoffeButton() {
        soundsOff(forestAudio, rainAudio, fireplaceAudio)
        checkIfIsPlaying(coffeAudio)
    }
    
    function timeEnd() {
        kitchenTimer.play()
    }

    return {
        pressButton,
        timeEnd,
        pressForestButton,
        pressRainButton,
        pressFirePlaceButton,
        pressCoffeButton,
        setVolume,
        forestAudio,
        rainAudio,
        fireplaceAudio,
        coffeAudio
    }
    
}
