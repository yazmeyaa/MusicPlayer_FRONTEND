import { Player } from './components/BottomPlayer/index'
import { Router } from './AppRouter'
import styled, { createGlobalStyle } from 'styled-components'
import { useAppSelector } from 'hooks/useTypedSelector'
import Montserrat from 'assets/fonts/Montserrat-VariableFont_wght.ttf'

const AppContainer = styled.div`
    &{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        color: white;
        background: #110E1F;
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

    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat}) format('truetype') ;
        
    }
`

export const App = () => {
    const { play } = useAppSelector(state => state.PlayerState)

    return (
        <AppContainer>
            <GlobalStyles />
            <OutletContainer>
                <Router />
            </OutletContainer>
            {play && <Player />}
        </AppContainer>
    )
}