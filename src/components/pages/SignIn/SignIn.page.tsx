import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  signIn,
  userObserver,
} from "../../../_redux/firebase-store-auth/auth/firebaseAuth";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../_redux/hooks";
import { signInRed } from "../../../_redux/inPlanSlice";
import { store } from "../../../_redux/store";
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../../../_redux/firebase-store-auth/firebase.config";
const SignInPage = () => {
  const { auth } = firebaseConfig;
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser) navigate("/");
  });

  const { register, handleSubmit } = useForm();

  const dispatch = useAppDispatch();

  let count = 0;
  const onSubmit = (data: { [x: string]: any }) => {
    count++;
    if (count === 1) {
      signIn({ email: data.email, password: data.password }).then((user) => {
        console.log("user", user);
      });

      dispatch(
        signInRed({ user: [{ email: data.email, password: data.password }] })
      );
    }

    userObserver();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit((data) => onSubmit(data))} className="white">
        <h5 className="grey-text text-darken-3">SignIn</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
