import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "firebase-config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  startAfter, limit,
} from "firebase/firestore";
import { toast } from "react-toastify";

export const getAllPosts = (createAsyncThunk as any)(
  "posts/getAllPosts",
  async () => {
    const postsCollectionRef = collection(db, "posts");
    const q = query(postsCollectionRef, orderBy("createdAt", "desc"));
    try {
      const response = await getDocs(q);
      const postsArr = response.docs.map((doc) =>
        Object.assign({ uid: doc.id }, doc.data())
      );
      return postsArr;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getpaginatedPosts = (createAsyncThunk as any)(
  "posts/getpaginatedPosts",
  async () => {
    const postsCollectionRef = collection(db, "posts");

    try {
      const first = query(
        postsCollectionRef,
        orderBy("createdAt", "desc"),
        limit(4)
      );
      const documentSnapshots = await getDocs(first);

      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];
      console.log("last", lastVisible);

      const next = query(
        postsCollectionRef,
        orderBy("createdAt", "desc"),
        startAfter(lastVisible),
        limit(4)
      );

      
    } catch (err) {
      console.log(err);
    }
  }
);

export const createNewPost = (createAsyncThunk as any)(
  "/posts/createPost",
  async ({ post, authToken, dispatch }: { post: string; authToken: string, dispatch:any }) => {
    try {
      await addDoc(collection(db, "posts"), {
        content: post,
        id: authToken,
        comments: [],
        likes: { likeCount: 0, likedBy: [] },
        createdAt: serverTimestamp(),
      });
      toast.success("Created Post sucessfully!");
      dispatch(getAllPosts())
    } catch (err) {
      console.log(err);
    }
  }
);

export const editPostService = (createAsyncThunk as any)(
  "posts/editPost",
  async (
    { updatedPost, postId }: { updatedPost: any; postId: any },
    { dispatch }: any
  ) => {
    try {
      const userDoc = doc(db, "posts", postId);
      const updatedUser = await updateDoc(userDoc, { content: updatedPost });
      toast.success("Updated Post sucessfully!");
      dispatch(getAllPosts());
      return updatedUser;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deletePost = (createAsyncThunk as any)(
  "posts/deletePost",
  async (id: string, { dispatch }: any) => {
    try {
      const postDoc = doc(db, "posts", id);
      const res = await deleteDoc(postDoc);
      toast.success("Deleted Post sucessfully!");
      dispatch(getAllPosts());
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
);
