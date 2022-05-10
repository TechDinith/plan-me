import { configureStore } from "@reduxjs/toolkit";
import myPlanReducer from "./inPlanSlice";
import createSagaMiddleware from "@redux-saga/core";
import watchProject from "./sagas/sagas";
import { firebaseReducer } from "react-redux-firebase";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    projects: myPlanReducer.projectSlice,
    user: myPlanReducer.userSlice,
    firebase: firebaseReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchProject);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
