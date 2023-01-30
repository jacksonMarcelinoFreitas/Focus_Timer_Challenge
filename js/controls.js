
export default function Controls({
    buttonPlay,
    buttonPause,
    // buttonStop,
    // buttonMore,
    // buttonLess,
    buttonDarkTheme,
    buttonLightTheme,
    theme,
})  {

    function play(){
        buttonPause.classList.remove('hide')
        buttonPlay.classList.add('hide')
    }

    function pause(){
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function reset(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function themeDark(){
        buttonDarkTheme.classList.add('hide')
        buttonLightTheme.classList.remove('hide')
        theme.classList.add('dark')
        
    }

    function themeLight(){
        buttonLightTheme.classList.add('hide')
        buttonDarkTheme.classList.remove('hide')
        theme.classList.remove('dark')
    }

    return{
        reset,
        play,
        pause,
        themeDark,
        themeLight,
    }
}