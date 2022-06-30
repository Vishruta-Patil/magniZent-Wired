import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";

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
        toast.success("Signed in sucessfully!")
        return response?.user?.uid;
      } else {
        toast.error("Fill all the credentials");
      }
    } catch (err : any) {
      toast.error("Try again later")
      console.log(err)
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
        toast.success("Signed in sucessfully!")
        return response?.user?.uid;
      } else {
        toast.error("Fill all the credentials");
      }
    } catch (err : any) {
      toast.error("Try again later")
      console.log(err);
    }
  }
);
