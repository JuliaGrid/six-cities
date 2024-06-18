import { createAction } from '@reduxjs/toolkit';

export const markFavorite = createAction<{ hotelId: number }>('room/markFavorite');
