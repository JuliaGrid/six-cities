import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from '../../pages/Main/Main';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { AppRoutes, AuthorizationStatus } from '../../constants';
import { Login } from '../../pages/Login/Login';
import { Favorites } from '../../pages/Favorites/Favorites';
import { Room } from '../../pages/Room/Room';
import { NotFound } from '../../pages/NotFound/NotFound';
import { useAppSelector } from '../../hooks/useAppDispatch/useAppDispatch';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <div></div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={<Main/>}
        />
        <Route
          path={AppRoutes.City}
          element={<Main />}
        />
        <Route
          path={AppRoutes.Login}
          element={<Login />}
        />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute authStatus={AuthorizationStatus.Auth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Room}
          element={<Room />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
