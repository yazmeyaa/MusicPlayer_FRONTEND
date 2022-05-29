import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useTypedSelector';
import { SingleButton, ButtonsContainer, ButtonIcons } from './styled';
import pauseButton from './icons/pause_button.svg';
import playButton from './icons/play_button.svg';
import prevButton from './icons/prev_button.svg';
import nextButton from './icons/next_button.svg';

export const ButtonsCollection = () => {
  const { play } = useAppSelector((state) => {
    return state.PlayerState;
  });
  const { changePlayStatus } = useActions();

  function handlePrev() {
    // TODO: create future changing song function
  }

  function handleNext() {
    // TODO: create future changing song function
  }

  return (
    <ButtonsContainer>
      <SingleButton onClick={handlePrev}>
        {' '}
        <ButtonIcons src={prevButton} />{' '}
      </SingleButton>
      <SingleButton onClick={changePlayStatus}>
        {play ? <ButtonIcons src={pauseButton} /> : <ButtonIcons src={playButton} />}
      </SingleButton>
      <SingleButton onClick={handleNext}>
        <ButtonIcons src={nextButton} />
      </SingleButton>
    </ButtonsContainer>
  );
};
