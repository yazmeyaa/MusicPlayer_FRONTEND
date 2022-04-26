import {Container, SubContainer} from './styled'
import {ButtonsCollection} from './ButtonsCollection/ButtonsCollection'
import { MusicVolume } from './MusicVolume/MusicVolume'
import { ProgressBar } from './ProgressBar/ProgressBar'
import Monster from '../SimpleSongs/monster.mp3'
import { useEffect, useState } from 'react'


export const Player = () => {
    const [currentSong, setCurrentSong] = useState(new Audio(Monster))
    const [currentSongTiming, setCurrentSongTiming] = useState(0)
    const [songDuration, setSongDuration] = useState(0)
    const [isPlaying, setPlaying] = useState(false)
    
    useEffect(()=>{
        setSongDuration(()=>{
            return currentSong.duration
        })
    },[currentSong])


    
    return (
        <Container>
            <SubContainer>
                <ButtonsCollection />
                <MusicVolume />
            </SubContainer>
            <ProgressBar currentSongProgress={currentSongTiming} songDuration={songDuration} />
        </Container>
    )
}


