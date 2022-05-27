import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./_redux/store";
import App from "./App";
import "./index.scss";
import firebase from "../src/_redux/firebase-store-auth/firebase.config";

const container = document.getElementById("root")!;
const root = createRoot(container);

firebase.auth.onAuthStateChanged(() => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
});
