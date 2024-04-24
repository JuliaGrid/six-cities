import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from '../../pages/Main/Main';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { AppRoutes, AuthStatuses } from '../../constants';
import { Login } from '../../pages/Login/Login';
import { Favorites } from '../../pages/Favorites/Favorites';
import { Room } from '../../pages/Room/Room';
import { NotFound } from '../../pages/NotFound/NotFound';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={<Main/>}
        />
        <Route
          path={AppRoutes.Login}
          element={<Login />}
        />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute authStatus={AuthStatuses.Auth}>
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
