import { CommentCard } from "components/Comment/CommentCard";
import { CreateComment } from "components/Comment/CreateComment";
import PostCard from "components/Post/PostCard";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllPosts } from "services/postsServices";
import { PostDetailsType } from "types/post.types";
import { CommentDataType } from "types/user.types";

export const SinglePageContent = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const { allPosts } = useAppSelector((store) => store.posts);
  const { postId } = params;

  const [userPost, setUserPost] = useState<any>([]); //change 3

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  useEffect(() => {
    const getPost: PostDetailsType | undefined = allPosts.find(
      (post: PostDetailsType) => post?.uid === postId
    );
    setUserPost(getPost);
  }, [allPosts]);

  return (
    <div>
      <PostCard item={userPost} />
      {postId && <CreateComment postId={postId} />}
      {userPost?.comments &&
        userPost?.comments.map((comment: CommentDataType, index: number) => (
          <CommentCard comment={comment} postId={postId} />
        ))}
    </div>
  );
};
