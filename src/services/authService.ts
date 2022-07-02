import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { db } from "firebase-config";
import { getUserCredentials } from "redux/slices/authSlice";

export const addUser = (createAsyncThunk as any)(
  "auth/addUser",
  async ({id, name, email}:{id: string, name: string, email: string}) => {
    try {
      const userDocRef = await addDoc(collection(db, "users"), {
        id,
        name,
        email,
      });
      console.log({userDocRef});
      return id
    } catch (err) {
      console.log({err});
    }
  }
);

export const signInUser = (createAsyncThunk as any)(
  "auth/signInUser",
  async ({name, email, password}: {name: string,email: string,password: string}, {dispatch} : {dispatch:any}) => {
    try {
      if (name !== "" && email !== "" && password !== "") {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const id = response?.user?.uid
        dispatch(addUser({id, name, email}));
        dispatch(getUserCredentials({id, name, email}))

        toast.success("Signed in sucessfully!");
        return id;
      } else {
        console.log("this is running");
        toast.error("Fill all the credentials");
      }
    } catch (err: any) {
      toast.error("Try again later");
      console.log(err);
    }
  }
);

export const loginInUser = (createAsyncThunk as any)(
  "auth/loginInUser",
  async ({ email, password }: { email: string; password: string }, {dispatch}:{dispatch:any}) => {
    try {
      if (email !== "" && password !== "") {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const id = response?.user?.uid
        const name = "John Doekar"
        dispatch(addUser({id, name, email}));
        dispatch(getUserCredentials({id, name, email}))

        toast.success("Logged in sucessfully!");
        return id;
      } else {
        toast.error("Fill all the credentials");
      }
    } catch (err: any) {
      toast.error("Try again later");
      console.log(err);
    }
  }
);
