// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import articleReducer from "./articleSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, articleReducer);

export const store = configureStore({
  reducer: {
    article: persistedReducer,
  },
});

export const persistor = persistStore(store);
