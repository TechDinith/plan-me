import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./inPlanSlice";
import createSagaMiddleware from "@redux-saga/core";
import watchProject from "./sagas/projectSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchProject);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
