import { CommentCard } from "components/Comment/CommentCard"
import { CreateComment } from "components/Comment/CreateComment"
import PostCard from "components/Post/PostCard"
import { useAppDispatch, useAppSelector } from "hooks"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getAllPosts } from "services/postsServices"
import { CommentDataType } from "types/user.types"

export const SinglePageContent = () => {
    const dispatch = useAppDispatch()
    const params = useParams()

    const {allPosts} = useAppSelector(store => store.posts)
    const {postId} = params
    const userPost:any = allPosts.find((post:any) => post?.uid === postId)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [userPost])

    
    return (
        <div>
            <PostCard item={userPost}/>
            {postId && <CreateComment postId={postId}/>}
            {userPost?.comments && userPost?.comments.map((comment:CommentDataType,index:number) => (
                <CommentCard comment={comment} postId={postId}/>
            ))}
        </div>
    )
}