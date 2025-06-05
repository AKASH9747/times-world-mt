import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import countriesReducer from "../features/countriesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    countries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
