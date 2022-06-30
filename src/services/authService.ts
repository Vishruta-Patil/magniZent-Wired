import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const signInUser = (createAsyncThunk as any)(
  "auth/signInUser",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      if (email !== "" && password !== "") {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        return response?.user?.uid;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginInUser = (createAsyncThunk as any)(
  "auth/loginInUser",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      if (email !== "" && password !== "") {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        return response?.user?.uid;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
