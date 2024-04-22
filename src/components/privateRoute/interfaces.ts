import { AuthStatuses } from '../../constants';

export interface PrivateRouteProps {
    authStatus: AuthStatuses;
    children: JSX.Element;
}
