// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import articleReducer from "./articleSlice";
import reviewReducer from "./reviewSlice";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const storeReducer =combineReducers({articleReducer,reviewReducer})

const persistedReducer = persistReducer(persistConfig, storeReducer);

export const store = configureStore({
  reducer: {
    store: persistedReducer,
  },
});

export const persistor = persistStore(store);
