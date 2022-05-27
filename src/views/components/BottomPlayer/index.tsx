import { Container, SubContainer } from './styled';
import { ButtonsCollection } from './ButtonsCollection/ButtonsCollection';
import { MusicVolume } from './MusicVolume/MusicVolume';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { useAppSelector } from 'hooks/useTypedSelector';

export const Player = () => {
  const { songDuration, songCurrentTime } = useAppSelector((state) => {
    return state.PlayerState;
  });

  return (
    <Container>
      <SubContainer>
        <ButtonsCollection />
        <MusicVolume />
      </SubContainer>
      <ProgressBar currentSongProgress={songCurrentTime} songDuration={songDuration} />
    </Container>
  );
};
