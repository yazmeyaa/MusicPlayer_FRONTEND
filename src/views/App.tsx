import { Router } from './AppRouter';
import { GlobalStyles } from './components/globalStyles';
import { appConfig } from 'config/appConfig';
import { useEffect } from 'react';

export const App: React.FC = () => {
  useEffect(() => {
    console.log(appConfig);
  }, []);
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};
