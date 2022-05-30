import { FC } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/useTypedSelector';
import { AuthPage } from './pages/authPage';
import { Landing } from './pages/landing';

export const Router = () => {
  const { JWT } = useAppSelector((state) => state.UserState);

  return (
    <Routes>
      <Route element={<ProtectedRoutes token={JWT} />}>
        <Route path="/" element={<Landing />} />
      </Route>
      <Route element={<CantSeeWithToken token={JWT} />}>
        <Route path="/login" element={<AuthPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const CantSeeWithToken: FC<{ token: string | null }> = ({ token }) => {
  // TODO: Make separate component from this with useNavigate hook;
  return token ? <Navigate to="/" replace /> : <Outlet />;
};

interface IProtectedRoutes {
  token: string | null;
}

const ProtectedRoutes: FC<IProtectedRoutes> = ({ token }) => {
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
