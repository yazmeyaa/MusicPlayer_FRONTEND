import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useActions } from '../../customHooks/useActions'
import { useAppSelector } from '../../customHooks/useTypedSelector'
import { ProgressBarContainer, PregressBarBody, CurrentProgressBar, ProgressBarThumb } from './styled'

interface IProgressBar {
    currentSongProgress: number,
    songDuration: number
}

function getPercent(num1: number, num2: number): number {
    return num1 / num2 * 100
}

function getPosition(xMousePos: number, element: DOMRect){

}

export const ProgressBar = ({ currentSongProgress, songDuration }: IProgressBar) => {
    const progressRef = useRef<HTMLDivElement>(null)
    const isMouseDown = useRef<boolean>(false)

    const { ChangeCurrentSongTime } = useActions()

    useEffect(() => {
        window.addEventListener('mousemove', (event: MouseEvent) => {
            if (isMouseDown.current && ( null !== progressRef.current ) ) {
                getPosition(event.offsetX, progressRef.current.getBoundingClientRect())
            }
        }, false)

        window.addEventListener('mouseup', ()=>{
            if(isMouseDown.current){
                isMouseDown.current = !isMouseDown.current
            }
        }, false)

    }, [])

    function handleMouseDownOnBar(event: React.MouseEvent) {
        isMouseDown.current = !isMouseDown.current

        if ((null !== progressRef.current)) {
            ChangeCurrentSongTime(getPercent(event.nativeEvent.offsetX, progressRef.current.offsetWidth))
        }
    }

    return (
        <ProgressBarContainer>
            <PregressBarBody onMouseDown={handleMouseDownOnBar} ref={progressRef} >
                <CurrentProgressBar currentSongProgress={currentSongProgress}/>
                <ProgressBarThumb />
            </PregressBarBody>
        </ProgressBarContainer>
    )
}