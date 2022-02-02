import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import practiceReducer from '../features/practiceSlice';
import { practiceApi } from './services/practiceApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    user: userReducer,
    practice: practiceReducer,
    [practiceApi.reducerPath]: practiceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(practiceApi.middleware),
});

setupListeners(store.dispatch);
