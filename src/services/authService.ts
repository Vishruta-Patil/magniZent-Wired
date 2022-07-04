import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { collection, addDoc, getDocs, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "firebase-config";
import { getUserCredentials } from "redux/slices/authSlice";

export const addUser = (createAsyncThunk as any)(
  "auth/addUser",
  async ({
    id,
    name,
    username,
    email,
  }: {
    id: string;
    username: string;
    name: string;
    email: string;
  }) => {
    try {
      // **** Add doc in collection without id ****
      // await addDoc(collection(db, "users"), {
      //   name,
      //   username,
      //   email,
      // });

      await setDoc(doc(db, "users", id),  {
          id,
          name,
          username,
          email,
        });
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateUser = (createAsyncThunk as any)("auth/updateUser", async(newData : {newData: any}) => {
  const id : any = localStorage.getItem("authToken")
  try {
    const userDoc = doc(db, 'users', id)
    const updatedUser = await updateDoc(userDoc, newData)
    toast.success("Profile updated sucessfully!");
    return updatedUser
  } catch (err) {
    console.log(err);
  }
})

export const getAllUsers = (createAsyncThunk as any)(
  "auth/getAllUsers",
  async () => {
    const usersCollectionRef = collection(db, "users");
    const arr = [];
    try {
      const response = await getDocs(usersCollectionRef);
      const usersArr = response.docs.map((doc) => doc.data());
      return usersArr;
    } catch (err) {
      console.log(err);
    }
  }
);

export const signInUser = (createAsyncThunk as any)(
  "auth/signInUser",
  async (
    {
      name,
      username,
      email,
      password,
    }: { name: string; username: string; email: string; password: string },
    { dispatch }: { dispatch: any }
  ) => {
    try {
      if (name !== "" && email !== "" && password !== "") {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const id = response?.user?.uid;
        dispatch(addUser({ id, name, username, email }));
        dispatch(getUserCredentials({ id, name, email }));

        toast.success("Signed in sucessfully!");
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

export const loginInUser = (createAsyncThunk as any)(
  "auth/loginInUser",
  async (
    { email, password }: { email: string; password: string },
    { dispatch }: { dispatch: any }
  ) => {
    try {
      if (email !== "" && password !== "") {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const id = response?.user?.uid;
        const name = "John Doekar";
        dispatch(getUserCredentials({ id, name, email }));

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
