import PostCard from "components/Post/PostCard";
import { useAppDispatch, useAppSelector } from "hooks";
import { useBookmark } from "hooks/useBookmark";
import { useEffect } from "react";
import { getBookmarkList } from "redux/slices/userSlice";
import { getAllUsers } from "services/authService";
import { getAllPosts } from "services/postsServices";

export const BookMarkContent = () => {
  const { bookmarkList } = useAppSelector((store) => store.user);
  const { allPosts } = useAppSelector((store) => store.posts);
  const {allUsers} = useAppSelector(store => store.auth)
  const bookmarkData = useBookmark()
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(getAllUsers())
  // }, [bookmarkList, bookmarkData, allPosts, allUsers])
  
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPosts())
    dispatch(getBookmarkList(bookmarkData))
  }, [allPosts]);

  return (
    <div>
      {bookmarkList && bookmarkList.length === 0 ? (
        <h1 className="mt-10 text-2xl font-bold">No Bookmark</h1>
      ) : (
        bookmarkList?.map((item, index) => <PostCard item={item} key={index} />)
      )}
    </div>
  );
};

// content
// "Shree Krishna Govinda Hare Murari Hae Nath Narayan Vasudeva Radhae, Radhae!!"
// id
// "oxj4JTPfjLO7KuLo1gxG3nt5ygG2"

// content
// "Learning full-stack web development in neoG camp'22"
// id
// "5J47iRN6QuM26gOZ2IrPpiJFLiC3"
