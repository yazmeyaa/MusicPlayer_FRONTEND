import React, {useEffect, useRef} from 'react'
//import { useActions } from '../../customHooks/useActions'
//import { useAppSelector } from '../../customHooks/useTypedSelector'
import { ProgressBarContainer, PregressBarBody, CurrentProgressBar, ProgressBarThumb } from './styled'

interface IProgressBar {
    currentSongProgress: number,
    songDuration: number
}

export const ProgressBar = ({currentSongProgress, songDuration}:IProgressBar) => {

    return(
        <ProgressBarContainer>
            <PregressBarBody >
                <CurrentProgressBar currentSongProgress={currentSongProgress} />
                <ProgressBarThumb/> 
            </PregressBarBody>
        </ProgressBarContainer>
    )
}