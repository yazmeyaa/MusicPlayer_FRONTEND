import React, { MutableRefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'
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

export const ProgressBar = ({ currentSongProgress, songDuration }: IProgressBar) => {
    const progressRef = useRef<HTMLDivElement>(null)
    const mouseCoords = useRef<{ x: number, y: number }>({ x: 0, y: 0 })
    const isMouseDown = useRef(false)
    const { ChangeIsMouseDown, ChangeCurrentSongTime } = useActions()

    useEffect(() => {
        window.addEventListener('mousemove', (event: MouseEvent) => {
            if (isMouseDown.current) {
                mouseCoords.current.x = event.pageX
                mouseCoords.current.y = event.pageY
                console.log(mouseCoords.current)
            }
        }, false)

        window.addEventListener('mouseup', ()=>{
            if(isMouseDown){
                isMouseDown.current = !isMouseDown
            }
        }, false)

    }, [])

    function handleMouseDownOnBar(event: React.MouseEvent) {
        isMouseDown.current = !isMouseDown.current

        if ((null !== progressRef.current)) {
            ChangeCurrentSongTime(getPercent(event.nativeEvent.offsetX, progressRef.current.offsetWidth))
        }
    }

    useEffect(()=>{
        console.log(isMouseDown.current)
    }, [isMouseDown.current])


    return (
        <ProgressBarContainer>
            <PregressBarBody onMouseDown={handleMouseDownOnBar} ref={progressRef} >
                <CurrentProgressBar currentSongProgress={currentSongProgress} />
                <ProgressBarThumb />
            </PregressBarBody>
        </ProgressBarContainer>
    )
}