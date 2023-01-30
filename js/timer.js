import Sounds from "./sounds.js"

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
    sound
})  {

    let timerTimeOut // variavel que recebe o setTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function updateDisplay(newMinutes, seconds){
        console.log(newMinutes)
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")

        if(newMinutes < 0){
            updateDisplay(0, 0)
            newMinutes = 0
        }
    }

    function setMinutes(type){
        if(type == 1){
            updateDisplay(minutes += 5, 0)
        }else{
            updateDisplay(minutes -= 5, 0)
            if(minutes <= 0){
                minutes = 0
            }
        }
    }

    function reset(){
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut) // esta funçao para a execuçao do setTimeout
    }

    function countDown(){
        timerTimeOut = setTimeout( function(){
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0

            updateDisplay(minutes, 0) //seta segundos começando com zero, pois a regra já cai no if
            
            if(isFinished){
                resetControls()
                updateDisplay()
                Sounds().timeEnd()
                return
            }

            if (seconds <= 0) {
                seconds = 60
                -- minutes
            } 

            updateDisplay(minutes, String(seconds - 1))
            countDown()
        }, 1000)
    }

    
    function  hold(){
        clearTimeout(timerTimeOut)
    }

    return{
        countDown,
        reset,
        updateDisplay,
        setMinutes,
        hold
    }
}