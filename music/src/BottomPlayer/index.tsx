import {Container, SubContainer} from './styled'
import {ButtonsCollection} from './ButtonsCollection/ButtonsCollection'
import { MusicVolume } from './MusicVolume/MusicVolume'
import { ProgressBar } from './ProgressBar/ProgressBar'

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


