import { auth } from "firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const login = async (email: string, password: string, navigate: any) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem(
      "authToken",
      (response as any)._tokenResponse.refreshToken
    );
    navigate("/");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signiIn = async (
  email: string,
  password: string,
  navigate: any
) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    localStorage.setItem(
      "authToken",
      (response as any)._tokenResponse.refreshToken
    );
    navigate("/login");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
