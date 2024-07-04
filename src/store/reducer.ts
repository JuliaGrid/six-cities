import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../constants';
import { loadFavorite, loadHotels, requireAuthorization, setError, setHotelsDataLoadingStatus } from './action';
import { InitalState } from './interfaces';

const initialState: InitalState = {
  hotels: [],
  favorite: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isHotelsDataLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setHotelsDataLoadingStatus, (state, action) => {
      state.isHotelsDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadHotels, (state, action) => {
      state.hotels = action.payload;
    })
    .addCase(loadFavorite, (state, action) => {
      state.favorite = action.payload;
    });
});

export { reducer };
