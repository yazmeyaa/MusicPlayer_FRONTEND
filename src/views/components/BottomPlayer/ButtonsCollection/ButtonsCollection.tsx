import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useTypedSelector';
import { SingleButton, ButtonsContainer, ButtonIcons } from './styled';
import pause_button from './icons/pause_button.svg';
import play_button from './icons/play_button.svg';
import prev_button from './icons/prev_button.svg';
import next_button from './icons/next_button.svg';

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
        <ButtonIcons src={prev_button} />{' '}
      </SingleButton>
      <SingleButton onClick={ChangePlayStatus}>
        {play ? <ButtonIcons src={pause_button} /> : <ButtonIcons src={play_button} />}
      </SingleButton>
      <SingleButton onClick={handleNext}>
        <ButtonIcons src={next_button} />
      </SingleButton>
    </ButtonsContainer>
  );
};
