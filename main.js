let minutesDisplay = document.querySelector('.minutes');
let secondsDisplay = document.querySelector('.seconds');
let playButton = document.querySelector('.play');
let pauseButton = document.querySelector('.pause');
let moreButton = document.querySelector('.more');
let lessButton = document.querySelector('.less');
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut // variavel que recebe o setTimeOut

function updateTimerDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")

    if(minutes < 0){
        updateTimerDisplay(0, 0)
        minutes = 0;
    }
}

function resetTimerOut(){
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut) // esta funçao para a execuçao do setTimeout
}

function countDown(){
    timerTimeOut = setTimeout( function(){
        let seconds = Number(secondsDisplay.textContent);
        let minutes = Number(minutesDisplay.textContent);

        updateTimerDisplay(minutes, 0) //seta segundos começando com zero, pois a regra já cai no if
        
        if(minutes == 0 && seconds == 0){
            return
        }

        if (seconds <= 0) {
            seconds = 5;
            -- minutes
        }  

        console.log(minutes)

        updateTimerDisplay(minutes, String(seconds - 1))
        countDown()
    }, 1000)
}

playButton.addEventListener('click', function(){
    countDown();
})

//Fará a pausa da contagem 
pauseButton.addEventListener('click', function(){
    resetTimerOut()
})

// Decrementa 1 dos minutos
lessButton.addEventListener('click', function(){
    updateTimerDisplay(--minutes, 0);
    //o decremento acontece atuzalizado na tela de forma imediata
})

// Acewscenta 1 aos minutos
moreButton.addEventListener('click', function(){
    updateTimerDisplay(++minutes, 0)
    //o incremento acontece atuzalizado na tela de forma imediata
    
})







