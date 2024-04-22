import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Favorites } from '../../pages/favorites/favorites';
import { Login } from '../../pages/login/login';
import { Main } from '../../pages/main/main';
import { NotFound } from '../../pages/notFound/notFound';
import { Property } from '../../pages/property/property';
import { PrivateRoute } from '../privateRoute/privateRoute';
import { AppRoutes, AuthStatuses } from '../../constants';

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
          element={<Property />}
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
