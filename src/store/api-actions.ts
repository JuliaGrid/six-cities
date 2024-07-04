import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Hotels, AuthData, UserData, ChangeFavorite, Hotel } from './interfaces';
import { loadFavorite, loadHotels, requireAuthorization, setError, setHotelsDataLoadingStatus } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../constants';
import { store } from './';

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchHotelsAction = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchHotels',
  async (city, { dispatch, extra: api }) => {
    dispatch(setHotelsDataLoadingStatus(true));
    const { data } = await api.get<Hotels>(APIRoute.Hotels);
    dispatch(setHotelsDataLoadingStatus(false));
    dispatch(loadHotels(data.filter((item) => item.city.name === city)));
  },
);

export const fetchFavoriteAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchFavorite',
  async (_arg, { dispatch, extra: api }) => {
    /** TODO: создать флаг загрузки */
    // dispatch(setHotelsDataLoadingStatus(true));
    const { data } = await api.get<Hotels>(APIRoute.Favorite);
    // dispatch(setHotelsDataLoadingStatus(false));
    dispatch(loadFavorite(data));
  },
);

export const changeFavoriteAction = createAsyncThunk<boolean, ChangeFavorite, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/changeFavorite',
  async ({hotelId, status}, { dispatch, extra: api }) => {
    const { data } = await api.post<Hotel>(`${APIRoute.Favorite}/${hotelId}/${status}`);
    return data.isFavorite;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
