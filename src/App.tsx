import { Player } from './BottomPlayer/index'
import { Router } from './Router'
import styled, { createGlobalStyle } from 'styled-components'

const AppContainer = styled.div`
    &{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        color: white;
        background: black;
    }   
`

const OutletContainer = styled.div`
    &{
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0px;
        padding: 0px;
    }
`

export const App = () => {

    return (
        <AppContainer>
            <GlobalStyles />
            <OutletContainer>
                <Router />
            </OutletContainer>
            <Player />
        </AppContainer>
    )
}