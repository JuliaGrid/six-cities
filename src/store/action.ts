import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../constants';
import { Hotels } from './interfaces';

export const markFavorite = createAction<{ hotelId: number }>('room/markFavorite');

export const setHotelsDataLoadingStatus = createAction<boolean>('data/setHotelsDataLoadingStatus');

export const loadHotels = createAction<Hotels>('data/loadHotels');

export const loadFavorite = createAction<Hotels>('data/loadFavorite');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('data/setError');
