import { Router } from './AppRouter';
import { GlobalStyles } from './components/globalStyles';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};
