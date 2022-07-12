import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "firebase-config";
import { arrayRemove, arrayUnion, collection, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { toast } from "react-toastify";

export const getBookmark = (createAsyncThunk as any)("user/getBookmark", async () => {
    const userId:any = localStorage.getItem("authToken") 
    const usersRef = collection(db, "users")
    const q = query(usersRef, where("id", "==", userId))
    let user:any = []
    onSnapshot(q, (snapshot) => {
        let user:any = []
        snapshot.docs.forEach((doc:any) => {
            user.push(doc.data())
        })
        return user[0]?.bookmark
    })  

    let resPromiseCount = 0;
    
    await(async () => {
        return new (Promise as any)((resolve: any, reject: any) => {
            onSnapshot(q, (snapshot) => {
                snapshot.docs.forEach((doc:any) => {
                    user.push(doc.data())
                })
                resPromiseCount++;
                if (resPromiseCount === 1) {
                    resolve(user);
                  }
            })        
        });
      })();
     return user[0]?.bookmark 
})

export const addBookmark = createAsyncThunk("user/addBookmark", async({bookmarkList,item}:any) => {
    const userId:any = localStorage.getItem("authToken") //doubt : userId: string|null
    try {
        const userDoc = doc(db, "users", userId)
        await updateDoc(userDoc, {bookmark: arrayUnion(item)}) 
        toast.success("Bookmark added Sucessfully")
    } catch(err) {
        console.log(err)
    }
})


export const removeBookmark = createAsyncThunk("user/removeBookmark", async({bookmarkList,item}:any) => {
    const userId:any = localStorage.getItem("authToken") //doubt : userId: string|null
    try {
        const userDoc = doc(db, "users", userId)
        await updateDoc(userDoc, {bookmark: arrayRemove(item)}) 
        toast.success("Bookmark removed Sucessfully")
    } catch(err) {
        console.log(err)
    }
})