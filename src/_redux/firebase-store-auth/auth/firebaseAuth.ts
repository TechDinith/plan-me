import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
