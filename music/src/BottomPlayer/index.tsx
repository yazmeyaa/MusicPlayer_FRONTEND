import {Container, SubContainer} from './styled'
import {ButtonsCollection} from './ButtonsCollection/ButtonsCollection'
import { MusicVolume } from './MusicVolume'
import { ProgressBar } from './ProgressBar'

export const Player = () => {


    
    return (
        <Container>
            <SubContainer>
                <ButtonsCollection />
                <MusicVolume />
            </SubContainer>
            <ProgressBar />
        </Container>
    )
}


