import { useEffect } from 'react'
import { useActions } from '../../customHooks/useActions'
import { useAppSelector } from '../../customHooks/useTypedSelector'
import { SingleButton, ButtonsContainer, ButtonsBody } from './styled'
import styled from 'styled-components'

export const ButtonsCollection = () => {
    const {play} = useAppSelector(state => {return state.PlayerState})
    const {ChangePlayStatus} = useActions()

    useEffect(()=>{
        console.log(play)
    },[play])

    function handlePrev(){

    }

    function handleNext(){

    }

    return (
        <ButtonsContainer>
            <ButtonsBody>
                <SingleButton onClick={handlePrev} >Prev</SingleButton>
                <SingleButton onClick={ChangePlayStatus} >{play ? 'Pause' : 'Play'}</SingleButton>
                <SingleButton onClick={handleNext} >Next</SingleButton>
            </ButtonsBody>
        </ButtonsContainer>
    )
}