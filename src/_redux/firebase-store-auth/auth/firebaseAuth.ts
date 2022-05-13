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

const auth = getAuth();
export const signIn = async (authUser: iAuthUser) => {
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
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("user", user);
    } else {
      console.log("Sign out");
    }
  });
};

export const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log("Signed out!");
      userObserver();
    })
    .catch((error) => {
      console.log("error", error);
    });
};
