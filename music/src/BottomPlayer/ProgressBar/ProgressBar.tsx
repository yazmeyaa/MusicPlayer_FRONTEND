import React, { useState } from 'react'
import { ProgressBody, PregressBar } from './styled'
import Monster from '../../SimpleSongs/monster.mp3'
import { useEffect } from 'react'

interface IProgressBar {

}

export const ProgressBar = () => {
    const [currentSong, setCurrentSong] = useState(new Audio(Monster))

    currentSong.play()

    function handleChangeProgress(event:React.ChangeEvent<HTMLInputElement>){
        console.log(event.target.value)
        console.log( currentSong.currentTime)
    }

    return(
        <ProgressBody>
            <PregressBar type='range' min='0' max={13} value={currentSong.currentTime} onChange={handleChangeProgress}/>
        </ProgressBody>
    )
}



/*

    Application store:
    -currentPlayedSongUrl
    -isSongPlayingNow


*/