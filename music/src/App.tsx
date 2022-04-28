import {Player} from './BottomPlayer/index'
import {Router} from './Router'
import styled, {createGlobalStyle} from 'styled-components'
import { useEffect } from 'react'
import { useActions } from './customHooks/useActions'
import { useAppSelector } from './customHooks/useTypedSelector'

const AppContainer = styled.div`
    &{
        display: flex;
        align-items: center;
        flex-direction: column;
        min-height: 100vh;
    }
`

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0px;
        padding: 0px;
    }
`

export const App = () => {
    const {SetCurrentCoordinates} = useActions()
    const {xPos, yPos} = useAppSelector(s => s.MouseCoordinates)

    useEffect(()=>{
        window.addEventListener('mousemove', (event: MouseEvent)=>{
            SetCurrentCoordinates({xPos: event.clientX, yPos: event.clientY})
        }, false)
    }, [])

    useEffect(()=>{
        console.log(xPos, yPos)
    },[xPos, yPos])

    return(
        <AppContainer>
            <GlobalStyles />
            <Router />
                <Player />
        </AppContainer>
    )
}