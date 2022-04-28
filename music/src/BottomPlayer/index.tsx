import {Container, SubContainer} from './styled'
import {ButtonsCollection} from './ButtonsCollection/ButtonsCollection'
import { MusicVolume } from './MusicVolume/MusicVolume'
import { ProgressBar } from './ProgressBar/ProgressBar'
import { useAppSelector } from '../customHooks/useTypedSelector'
import { useActions } from '../customHooks/useActions'
import { useEffect } from 'react'


export const Player = () => {    
    const {songCurrentTime, songDuration} = useAppSelector( (state) => {
        return state.PlayerState
    } )

    const {ChangeCurrentSongTime} = useActions()

    
    return (
        <Container>
            <SubContainer>
                <ButtonsCollection />
                <MusicVolume />
            </SubContainer>
            <ProgressBar currentSongProgress={songCurrentTime} songDuration={songDuration} />
        </Container>
    )
}


