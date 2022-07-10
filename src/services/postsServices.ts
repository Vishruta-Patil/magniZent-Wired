import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "firebase-config";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export const getAllPosts = (createAsyncThunk as any)("posts/getAllPosts", async() => {
    const postsCollectionRef = collection(db, "posts")
    try {
        const response = await getDocs(postsCollectionRef)
        const postsArr = response.docs.map(doc => Object.assign({ uid: doc.id }, doc.data()))
        return postsArr
    } catch (err) {
        console.log(err);
      }
})

export const createNewPost = (createAsyncThunk as any)("/posts/createPost", async({post, authToken}:{post:string, authToken:string}) => {
    try {
        await addDoc(collection(db, "posts"), {content: post, id:authToken});
        toast.success("Created Post sucessfully!");
    } catch(err) {
        console.log(err);
    }
})

export const editPostService = (createAsyncThunk as any)("posts/editPost", async({updatedPost,postId}:{updatedPost:any,postId:any}) => {
  try {
    console.log(updatedPost)
      const userDoc = doc(db, "posts", postId);
      const updatedUser = await updateDoc(userDoc, {content:updatedPost});
      toast.success("Updated Post sucessfully!");
      return updatedUser;     
  } catch (err) {
      console.log(err);
    }
})


export const deletePost = (createAsyncThunk as any)("posts/deletePost", async(id:string) => {
    try {
    const postDoc = doc(db, "posts", id)
    const res = await deleteDoc(postDoc)
    toast.success("Deleted Post sucessfully!");
    console.log(res)
    } catch (err) {
        console.log(err);
      }
})