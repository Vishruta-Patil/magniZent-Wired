import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "firebase-config";
import { doc, updateDoc } from "firebase/firestore";

export const addBookmark = createAsyncThunk("user/addBookmark", async(bookmark:[]) => {
    const userId:any = localStorage.getItem("authToken") //doubt : userId: string|null
    try {
        const userDoc = doc(db, "users", userId)
        const updateBookmark = await updateDoc(userDoc, {bookmark})
        console.log(updateBookmark)
        return updateBookmark; 
       
    } catch(err) {
        console.log(err)
    }
})