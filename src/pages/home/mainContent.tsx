import SearchUser from "components/common/search/SearchUser";
import CreatePost from "components/Post/CreatePost";
import PostCard from "components/Post/PostCard";
import { EditPostModal } from "components/common/modal/EditPostModal";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getAllPosts } from "services/postsServices";

export const MainContent = () => {
  const { allPosts } = useAppSelector((store) => store.posts);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [allPosts]);
  return (
    <>
      <SearchUser classnames="md:hidden w-11/12 mx-auto block" />
      <CreatePost />
      {allPosts.map((item, index) => (
        <div>
          <PostCard item={item} key={index} />
        </div>
      ))}
    </>
  );
};
