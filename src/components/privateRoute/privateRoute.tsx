import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../constants';
import { PrivateRouteProps } from './interfaces';

export function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;

  const isAuth = authStatus === AuthorizationStatus.Auth;

  return (isAuth ? children : <Navigate to={AppRoutes.Login} />);
}
