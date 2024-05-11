import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
const rootReducer = combineReducers({ user: userReducer });
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer); //persistReducer: This function is provided by redux-persist. It takes two arguments:
// persistConfig: This is the configuration object that specifies how and where the state should be persisted. It includes options such as storage (localStorage, AsyncStorage, etc.), whitelist/blacklist of reducers, and serialization options.
// rootReducer: This is the root reducer of your Redux application. It's the top-level reducer that combines all other reducers into a single state tree.
// persistedReducer: This variable holds the enhanced reducer returned by persistReducer. The enhanced reducer automatically handles persisting the state based on the configuration provided.

export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store); //this persistoor will amke the store persist
