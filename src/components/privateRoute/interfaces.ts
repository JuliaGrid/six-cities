import { AuthorizationStatus } from '../../constants';

export interface PrivateRouteProps {
    authStatus: AuthorizationStatus;
    children: JSX.Element;
}
