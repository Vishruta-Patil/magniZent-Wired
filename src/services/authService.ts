import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "firebase-config";
import { getUserCredentials } from "redux/slices/authSlice";
import { userDetailsType } from "types/auth.types";
import { storage } from "firebase-config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

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
      await setDoc(doc(db, "users", id), {
        id,
        name,
        username,
        email,
        bookmark: [],
        avatarUrl:"",
        follower : {
          followedBy: [],
          followerCount: 0
      },
      following: {
          followingBy: [],
          followingCount: 0
      }
      });
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateUser = (createAsyncThunk as any)(
  "auth/updateUser",
  async (newData: { newData: userDetailsType }) => {
    const id:string|null = localStorage.getItem("authToken");
    try {
      const userDoc = id && doc(db, "users", id);
      const updatedUser = userDoc && await updateDoc(userDoc, newData);
      toast.success("Profile updated sucessfully!");
      return updatedUser;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getAllUsers = (createAsyncThunk as any)(
  "auth/getAllUsers",
  async () => {
    const usersCollectionRef = collection(db, "users");
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
    } catch (err) {
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
    } catch (err) {
      toast.error("Try again later");
      console.log(err);
    }
  }
);

export const uploadAvatarProfile = (createAsyncThunk as any)(
  "auth/uploadAvatarProfile",
  async (avatarImage: Blob | Uint8Array | ArrayBuffer) => {
    try {
      const dataId = localStorage.getItem("authToken");
      const avatarRef = ref(storage, `avatar/${dataId}`);
      const res = await uploadBytes(avatarRef, avatarImage);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getAvatarProfile = (createAsyncThunk as any)(
  "auth/getAvatarProfile",
  async () => {
    try {
      const avatarRef = ref(storage, `avatar`);
      const response = await listAll(avatarRef);
      const dataId = localStorage.getItem("authToken");
      let reqURL: Promise<string> | string;
      const profileExists:boolean = response.items.some(
        (item) => item.name === dataId
      );
      const getProfile: any = response.items.find(
        (item) => item.name === dataId
      )

      if (profileExists) {
        reqURL = (async () => await getDownloadURL(getProfile))();
      } else reqURL = "no_image";

      return reqURL;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getAllAvatars = (createAsyncThunk as any)(
  "/auth/getAllAvatars",
  async () => {
    try {
      const avatarRef = ref(storage, `avatar`);
      const response = await listAll(avatarRef);
      let res: any = [];
      const lengthRes = response.items.length;
      let resPromiseCount = 0;

      await (async () => {
        return new (Promise as any)((resolve: any, reject: any) => {
          response.items.forEach(async (item) => {
            const reqURL = await getDownloadURL(item);
            resPromiseCount++;

            const obj: any = {};
            obj.id = item?.name;
            obj.url = reqURL;
            res = [...res, obj];

            if (resPromiseCount === lengthRes) {
              resolve(res);
            }
          });
        });
      })();
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getAvatarFromData = (createAsyncThunk as any)(
  "/auth/getAvatarFromData",
  async () => {
    try {
      const avatarRef = ref(storage, `avatar`);
      const response = await listAll(avatarRef);
      response.items.forEach(async (item) => {
        const reqURL = await getDownloadURL(item);
        const userDoc = doc(db, "users", item?.name);
        await updateDoc(userDoc, { avatarUrl: reqURL });
      });
    } catch (err) {
      console.log(err);
    }
  }
);
