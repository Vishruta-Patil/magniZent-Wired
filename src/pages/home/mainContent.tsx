import SearchUser from "components/common/search/SearchUser";
import CreatePost from "components/Post/CreatePost";
import PostCard from "components/Post/PostCard";
import { EditPostModal } from "components/common/modal/EditPostModal";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getAllPosts } from "services/postsServices";
import { useBookmark } from "hooks/useBookmark";
import { getBookmarkList } from "redux/slices/userSlice";
import { userDetailsType } from "types/auth.types";

export const MainContent = () => {
  const { allPosts } = useAppSelector((store) => store.posts);
  const dispatch = useAppDispatch();

  const { bookmarkList } = useAppSelector((store) => store.user);
  const bookmarkData = useBookmark()
  
  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getBookmarkList(bookmarkData))
  }, [allPosts]);

  // console.log(bookmarkList)
  
  
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
