import { useAppSelector } from '../../../hooks/useTypedSelector';
import { LandingBody } from './styled';

export const Landing: React.FC = () => {
  const { songList } = useAppSelector((state) => state.PlayerState);

  return (
    <LandingBody>
      {songList &&
        songList.map((item, index) => {
          return <div key={index}> {item.URL} </div>;
        })}
    </LandingBody>
  );
};
