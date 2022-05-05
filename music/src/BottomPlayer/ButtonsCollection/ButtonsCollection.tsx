import { useActions } from '../../customHooks/useActions'
import { useAppSelector } from '../../customHooks/useTypedSelector'
import { SingleButton, ButtonsContainer, ButtonsBody } from './styled'

export const ButtonsCollection = () => {
    const { play } = useAppSelector(state => { return state.PlayerState })
    const { ChangePlayStatus } = useActions()

    function handlePrev() {

    }

    function handleNext() {

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