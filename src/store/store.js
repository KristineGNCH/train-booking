import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage'

import { api } from "../api/api";
import routesParamsSlice from "../reducers/routesParamsSlice";
import seatsParamsSlice from "../reducers/seatsParamsSlice";
import vansParamsSlice from "../reducers/vansParamsSlice";
import trainsParamsSlice from "../reducers/trainsParamsSlise";

const reducers = combineReducers({
  routesParamsSlice: routesParamsSlice,
  seatsParamsSlice: seatsParamsSlice,
  trainsParamsSlice: trainsParamsSlice,
  vansParamsSlice: vansParamsSlice,
  [api.reducerPath]: api.reducer
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Redux persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      api.middleware,
    ),
});

export let persistor = persistStore(store)
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch);

export default store;