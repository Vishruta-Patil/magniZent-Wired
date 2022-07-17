import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "firebase-config";
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, updateDoc } from "firebase/firestore";
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

// export const getAllPosts = (createAsyncThunk as any)("posts/getAllPosts", async() => {
//     const postsCollectionRef = collection(db, "posts")
   
//     let user:any = []
//     let resPromiseCount = 0
    
//     await(async () => {
//         return new (Promise as any)((resolve: any, reject: any) => {
//             onSnapshot(postsCollectionRef, (snapshot) => {
//                 snapshot.docs.forEach((doc:any) => {
//                     user.push(Object.assign({ uid: doc.id }, doc.data()))
//                 })
//                 resPromiseCount++;
//                 if (resPromiseCount === 1) {
//                     resolve(user);
//                   }
//             })        
//         });
//       })();
//       console.log(user)
//      return user
// })

export const createNewPost = (createAsyncThunk as any)("/posts/createPost", async({post, authToken}:{post:string, authToken:string}) => {
    try {
        await addDoc(collection(db, "posts"), {content: post, id:authToken, likes: {likeCount:0, likedBy:[]}});
        toast.success("Created Post sucessfully!");
    } catch(err) {
        console.log(err);
    }
})

export const editPostService = (createAsyncThunk as any)("posts/editPost", async({updatedPost,postId}:{updatedPost:any,postId:any}, {dispatch}:any) => {
  try {
      const userDoc = doc(db, "posts", postId);
      const updatedUser = await updateDoc(userDoc, {content:updatedPost});
      toast.success("Updated Post sucessfully!");
      dispatch(getAllPosts())
      return updatedUser;     
  } catch (err) {
      console.log(err);
    }
})


export const deletePost = (createAsyncThunk as any)("posts/deletePost", async(id:string, {dispatch}:any) => {
    try {
    const postDoc = doc(db, "posts", id)
    const res = await deleteDoc(postDoc)
    toast.success("Deleted Post sucessfully!");
    dispatch(getAllPosts())
    console.log(res)
    } catch (err) {
        console.log(err);
      }
})