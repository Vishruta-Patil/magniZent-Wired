import SearchUser from "components/common/search/SearchUser";
import CreatePost from "components/Post/CreatePost";
import PostCard from "components/Post/PostCard";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getAllPosts } from "services/postsServices";
import { getBookmark } from "services/userService";
import { PostDetailsType } from "types/post.types";

export const ExploreContent = () => {
  const { allPosts } = useAppSelector((store) => store.posts);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  
  return (
    <>
      {allPosts.map((item:PostDetailsType, index) => (
        <div>
            <PostCard item={item} key={index} />
        </div>
      ))}
    </>
  );
};
