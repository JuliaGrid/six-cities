import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthStatuses } from '../../constants';
import { PrivateRouteProps } from './interfaces';

export function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;

  const isAuth = authStatus === AuthStatuses.Auth;

  return (isAuth ? children : <Navigate to={AppRoutes.Login} />);
}
