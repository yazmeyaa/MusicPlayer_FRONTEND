import { Router } from './AppRouter';
import { GlobalStyles } from 'views/components/globalStyles';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};
