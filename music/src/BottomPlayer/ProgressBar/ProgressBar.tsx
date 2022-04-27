import React, { useEffect, useRef, useState } from 'react'
import { ProgressBarContainer, PregressBarBody, CurrentProgressBar, ProgressBarThumb } from './styled'

interface IProgressBar {
    currentSongProgress: number,
    songDuration: number
}

export const ProgressBar = ({currentSongProgress, songDuration}:IProgressBar) => {

    function handleClickOnProgressBarTrack( event: React.MouseEvent<HTMLElement> ){
       console.log(event)
    }

    return(
        <ProgressBarContainer>
            <PregressBarBody onClick={handleClickOnProgressBarTrack}>
                <CurrentProgressBar currentSongProgress={currentSongProgress}/>
                <ProgressBarThumb/>
            </PregressBarBody>
        </ProgressBarContainer>
    )
}