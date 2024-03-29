import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "firebase-config";
import { arrayRemove, arrayUnion, collection, doc, getDocs, increment, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { toast } from "react-toastify";
import { userDetailsType } from "types/auth.types";
import { PostDetailsType } from "types/post.types";
import { CommentDataType } from "types/user.types";
import { getAllUsers } from "./authService";
import { getAllPosts } from "./postsServices";


// Bookmark Services
export const getBookmark = (createAsyncThunk as any)("user/getBookmark", async () => {
    const userId: String | null = localStorage.getItem("authToken")
    const usersRef = collection(db, "users")
    const q = query(usersRef, where("id", "==", userId))
    let user:userDetailsType[] = []
    let resPromiseCount = 0;

    await (async () => {
        return new (Promise as any)((resolve: any, reject: any) => {
            onSnapshot(q, (snapshot) => {
                snapshot.docs.forEach((doc: any) => {
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

export const addBookmark = createAsyncThunk("user/addBookmark", async ({ item }: { item: PostDetailsType }) => {
    const userId: string|null = localStorage.getItem("authToken")
    try {
        const userDoc = userId && doc(db, "users", userId)
        userDoc && await updateDoc(userDoc, { bookmark: arrayUnion(item) })
        toast.success("Bookmark added Sucessfully")
    } catch (err) {
        console.log(err)
    }
})

export const removeBookmark = createAsyncThunk("user/removeBookmark", async ({ item }: {item: PostDetailsType}) => {
    const userId: string | null = localStorage.getItem("authToken")
    try {
        const userDoc = userId && doc(db, "users", userId)
        userDoc && await updateDoc(userDoc, { bookmark: arrayRemove(item) })
        toast.success("Bookmark removed Sucessfully")
    } catch (err) {
        console.log(err)
    }
})


// Like Post Services
export const incrementLike = createAsyncThunk("user/incrementLike", async ({ postId, userId }: { postId: string, userId: string }, { dispatch }: { dispatch: any }) => {
    try {
        const postDoc = doc(db, "posts", postId)
        await updateDoc(postDoc, { "likes.likeCount": increment(1), "likes.likedBy": arrayUnion(userId) })
        dispatch(getAllPosts())
        dispatch(getAllUsers())
    } catch (err) {
        console.log(err)
    }
})

export const decrementLike = createAsyncThunk("user/decrementLike", async ({ postId, userId }: { postId: string, userId: string }, { dispatch }: { dispatch: any }) => {
    try {
        const postDoc = doc(db, "posts", postId)
        await updateDoc(postDoc, { "likes.likeCount": increment(-1), "likes.likedBy": arrayRemove(userId) })
        dispatch(getAllPosts())
        dispatch(getAllUsers())
    } catch (err) {
        console.log(err)
    }
})


// Follow UnFollow Services
export const addFollowing = ((createAsyncThunk as any)("user/addFollowing", async ({ userId, item, authToken, authItem }: { userId: string, item: userDetailsType, authToken: string, authItem: userDetailsType }, { dispatch }: any) => {
    try {
        const userDocUserId = doc(db, "users", userId)
        const userDocAuthId = doc(db, "users", authToken)

        const authObj = {
            id: authItem?.id,
            name: authItem?.name,
            username: authItem?.username
        }
        const userObj = {
            id: item?.id,
            name: item?.name,
            username: item?.username
        }

        await updateDoc(userDocUserId, { "follower.followerCount": increment(1), "follower.followerId": arrayUnion(authItem?.id), "follower.followedBy": arrayUnion(authObj) })
        await updateDoc(userDocAuthId, { "following.followingCount": increment(1), "following.followingId": arrayUnion(item?.id), "following.followingBy": arrayUnion(userObj) })
        dispatch(getAllPosts())
        dispatch(getAllUsers())
    } catch (err) {
        console.log(err)
    }
}))

export const removeFollowing = (createAsyncThunk("user/removeFollowing", async ({ userId, item, authToken, authItem }: { userId: string, item: userDetailsType, authToken: string, authItem: userDetailsType }, { dispatch }: any) => {
    try {
        const userDocUserId = doc(db, "users", userId)
        const userDocAuthId = doc(db, "users", authToken)
        const authObj = {
            id: authItem?.id,
            name: authItem?.name,
            username: authItem?.username
        }
        const userObj = {
            id: item?.id,
            name: item?.name,
            username: item?.username
        }
        await updateDoc(userDocUserId, { "follower.followerCount": increment(-1), "follower.followerId": arrayRemove(authItem?.id), "follower.followedBy": arrayRemove(authObj) })
        await updateDoc(userDocAuthId, { "following.followingCount": increment(-1), "following.followingId": arrayRemove(item?.id), "following.followingBy": arrayRemove(userObj) })
        dispatch(getAllPosts())
        dispatch(getAllUsers())
    } catch (err) {
        console.log(err)
    }
}))


// Comments Services

export const addComment = createAsyncThunk("user/addComment", async ({ postId, data }: { postId: string, data: CommentDataType }, { dispatch }: any) => {
    try {
        const postDoc = doc(db, "posts", postId)
        await updateDoc(postDoc, { "comments": arrayUnion(data) })
        dispatch(getAllPosts())
        toast.success("Comment added successfully!")
    } catch (err) {
        console.log(err)
    }
})

export const deleteComment = createAsyncThunk("user/deleteComment", async ({ postId, data }: { postId: string, data: CommentDataType }, { dispatch }: any) => {
    try {
        const postDoc = doc(db, "posts", postId)
        await updateDoc(postDoc, { "comments": arrayRemove(data) })
        toast.success("Comment deleted successfully!")
        dispatch(getAllPosts())
    } catch (err) {
        console.log(err)
    }
})







