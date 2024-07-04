export const TIMEOUT_SHOW_ERROR = 4000;

export enum AppRoutes {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Room = '/offer/:id',
    City = '/city/:name',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum APIRoute {
    Hotels = '/hotels',
    Favorite = '/favorite',
    Login = '/login',
    Logout = '/logout',
}
