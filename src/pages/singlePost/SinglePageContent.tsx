import { CommentCard } from "components/Comment/CommentCard"
import { CreateComment } from "components/Comment/CreateComment"
import PostCard from "components/Post/PostCard"
import { useAppDispatch, useAppSelector } from "hooks"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getAllPosts } from "services/postsServices"

export const SinglePageContent = () => {
    const dispatch = useAppDispatch()
    const {allPosts} = useAppSelector(store => store.posts)
    const params = useParams()

    const {postId} = params

    const userPost = allPosts.find((post:any) => post?.uid === postId)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])
    return (
        <div>
            <PostCard item={userPost}/>
            <CreateComment />
            <CommentCard />
            <CommentCard />
        </div>
    )
}