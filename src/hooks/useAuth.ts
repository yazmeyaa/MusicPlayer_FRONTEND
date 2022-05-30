import { useAppSelector } from './useTypedSelector';

export const useAuth = () => {
  const token = useAppSelector((state) => state.UserState.JWT);

  function checkIsTokenValid(token: string) {
    if (!token || typeof token !== 'string') {
      return false;
    }
  }
  return [token, checkIsTokenValid];
};
