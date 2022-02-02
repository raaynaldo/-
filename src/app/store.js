import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import practiceReducer from '../features/practiceSlice';
import { practiceApi } from './services/practiceApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { pokemonApi } from './services/pokemonApi';

export const store = configureStore({
  reducer: {
    user: userReducer,
    practice: practiceReducer,
    [practiceApi.reducerPath]: practiceApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(practiceApi.middleware)
      .concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);
