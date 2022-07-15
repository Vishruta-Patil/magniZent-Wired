import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "firebase-config";
import { arrayRemove, arrayUnion, collection, doc, getDocs, increment, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { toast } from "react-toastify";

export const getBookmark = (createAsyncThunk as any)("user/getBookmark", async () => {
    const userId:any = localStorage.getItem("authToken") 
    const usersRef = collection(db, "users")
    const q = query(usersRef, where("id", "==", userId))
    let user:any = []
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

export const incrementLike = createAsyncThunk("user/incrementLike", async({postId, userId}:{postId:string, userId:string}) => {
    try {
        const postDoc = doc(db, "posts", postId)
        await updateDoc(postDoc, {"likes.likeCount": increment(1), "likes.likedBy":arrayUnion(userId)}) 
    } catch(err) {
        console.log(err)
    }
})


export const decrementLike = createAsyncThunk("user/decrementLike", async({postId, userId}:{postId:string, userId:string}) => {
    try {
        const postDoc = doc(db, "posts", postId)
        await updateDoc(postDoc, {"likes.likeCount": increment(-1), "likes.likedBy":arrayRemove(userId)}) 
    } catch(err) {
        console.log(err)
    }
})

export const addFollowing = ((createAsyncThunk as any)("user/addFollowing", async({userId, item, authToken, authItem}:any) => {
    try {
        console.log(userId, item, authToken, authItem)
        const userDocUserId = doc(db, "users", userId)
        const userDocAuthId = doc(db, "users", authToken)

        const authObj =  {
            id: authItem?.id,
            name: authItem?.name,
            username: authItem?.username
        }
        const userObj = {
            id: item?.id,
            name: item?.name,
            username: item?.username
        }
        
        await updateDoc(userDocUserId, {"follower.followerCount": increment(1), "follower.followedBy":arrayUnion(authObj)})
        await updateDoc(userDocAuthId, {"following.followingCount": increment(1), "following.followingBy":arrayUnion(userObj)})
    } catch(err) {
        console.log(err)
    }
}))


export const removeFollowing = (createAsyncThunk("user/removeFollowing", async({userId, item, authToken, authItem}:{userId:string, item:any, authToken:string, authItem:any}) => {
    try {
        console.log("removed")
        const userDocUserId = doc(db, "users", userId)
        const userDocAuthId = doc(db, "users", authToken)
        const authObj =  {
            id: authItem?.id,
            name: authItem?.name,
            username: authItem?.username
        }
        const userObj = {
            id: item?.id,
            name: item?.name,
            username: item?.username
        }
        await updateDoc(userDocUserId, {"follower.followerCount": increment(-1), "follower.followedBy":arrayRemove(authObj)})
        await updateDoc(userDocAuthId, {"following.followingCount": increment(-1), "following.followingBy":arrayRemove(userObj)})
    } catch(err) {
        console.log(err)
    }
}))






