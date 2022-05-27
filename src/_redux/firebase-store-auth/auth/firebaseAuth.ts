import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { store } from "../../store";

interface iAuthUser {
  email: string;
  password: string;
}

export const signIn = async (authUser: iAuthUser) => {
  const auth = getAuth();
  const user = await signInWithEmailAndPassword(
    auth,
    authUser.email,
    authUser.password
  )
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      return user.uid;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { errorCode, errorMessage };
    });

  return user;
};

export const userObserver = () => {
  const auth = getAuth();
  let isUser = false;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("user", user);
      isUser = true;
    } else {
      console.log("Sign out");
      isUser = false;
    }
  });
  return isUser;
};

export const logOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Signed out!");
      userObserver();
    })
    .catch((error) => {
      console.log("error", error);
    });
};
