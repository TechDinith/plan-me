import { configureStore } from "@reduxjs/toolkit";
import inPlanReducer from "./inPlanSlice";

export const store = configureStore({
  reducer: {
    inPlan: inPlanReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
