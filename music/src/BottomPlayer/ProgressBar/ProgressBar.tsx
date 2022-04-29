import React, {useEffect, useRef} from 'react'
import { useActions } from '../../customHooks/useActions'
import { useAppSelector } from '../../customHooks/useTypedSelector'
import { ProgressBarContainer, PregressBarBody, CurrentProgressBar, ProgressBarThumb } from './styled'

interface IProgressBar {
    currentSongProgress: number,
    songDuration: number
}

export const ProgressBar = ({currentSongProgress, songDuration}:IProgressBar) => {
    const { ChangeIsMouseOnProgressBar, ChangeIsMouseDown, ChangeCurrentSongTime, SetMouseCoordinates } = useActions()
    const {isMouseDown} = useAppSelector(state => state.MouseState)
    const MouseDown = useRef(isMouseDown)

    useEffect(()=>{
        window.addEventListener('mouseup', ()=>{
            if(MouseDown.current){
                ChangeIsMouseDown()
            }
        }, false)

        window.addEventListener('mousemove', (event: MouseEvent)=>{
            if(MouseDown.current){
                SetMouseCoordinates(event.clientX, event.clientY)
                ChangeCurrentSongTime(event.clientX)
            }
        }, false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        MouseDown.current = isMouseDown
    },[isMouseDown])
    

    function handleClickOnProgressBarTrack( event: React.MouseEvent<HTMLElement> ){
        ChangeCurrentSongTime(event.nativeEvent.offsetX)
        ChangeIsMouseDown()
    }

    return(
        <ProgressBarContainer>
            <PregressBarBody onMouseDown={handleClickOnProgressBarTrack} onMouseEnter={()=>{ChangeIsMouseOnProgressBar(true)}} onMouseLeave={()=>{ChangeIsMouseOnProgressBar(false)}}  >
                <CurrentProgressBar currentSongProgress={currentSongProgress}/>
                <ProgressBarThumb/>
            </PregressBarBody>
        </ProgressBarContainer>
    )
}