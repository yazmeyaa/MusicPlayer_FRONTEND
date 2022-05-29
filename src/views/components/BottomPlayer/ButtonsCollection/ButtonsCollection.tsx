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
  const { ChangePlayStatus } = useActions();

  function handlePrev() {}

  function handleNext() {}

  return (
    <ButtonsContainer>
      <SingleButton onClick={handlePrev}>
        {' '}
        <ButtonIcons src={prevButton} />{' '}
      </SingleButton>
      <SingleButton onClick={ChangePlayStatus}>
        {play ? <ButtonIcons src={pauseButton} /> : <ButtonIcons src={playButton} />}
      </SingleButton>
      <SingleButton onClick={handleNext}>
        <ButtonIcons src={nextButton} />
      </SingleButton>
    </ButtonsContainer>
  );
};
