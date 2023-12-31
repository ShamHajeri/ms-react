// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import articleReducer from "./articleSlice";
import reviewSlice from "./reviewSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, articleReducer,reviewSlice);

export const store = configureStore({
  reducer: {
    store: persistedReducer,

  },
});

export const persistor = persistStore(store);
