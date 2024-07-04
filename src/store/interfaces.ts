import { AuthorizationStatus } from '../constants';

export type InitalState = {
    hotels: Hotels;
    favorite: Hotels;
    authorizationStatus: AuthorizationStatus;
    isHotelsDataLoading: boolean;
    error: string | null;
}

export type AuthData = {
    email: string;
    password: string;
};

export type UserData = {
    id: number;
    email: string;
    token: string;
};

export type Hotel = {
    bedrooms: number;
    city: {
        location: {
            latitude: number;
            longitude: number;
            zoom: number;
        };
        name: string;
    };
    description: string;
    goods: [string];
    host: {
        avatarUrl: string;
        id: number;
        isPro: boolean;
        name: string;
    };
    id: number;
    images: [string];
    isFavorite: boolean;
    isPremium: boolean;
    location: {
        latitude: number;
        longitude: number;
        zoom: number;
    };
    maxAdults: number;
    previewImage: string;
    price: number;
    rating: number;
    title: string;
    type: string;
}

export type Hotels = Hotel[];

