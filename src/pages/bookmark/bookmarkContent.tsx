import PostCard from "components/Post/PostCard";
import { useAppDispatch, useAppSelector } from "hooks";
import { useBookmark } from "hooks/useBookmark";
import { useEffect } from "react";
// import { getBookmarkList } from "redux/slices/userSlice";
import { getAllUsers } from "services/authService";
import { getAllPosts } from "services/postsServices";
import { getBookmark } from "services/userService";

export const BookMarkContent = () => {
  const { bookmarkList } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getBookmark())
  }, [bookmarkList]);

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


/*

const isBookmarkHandler = () => {
    const getBoookmarkData = bookmarkData.find((data:any) => data.uid === item.uid)
    if(getBoookmarkData) {
      setIsBookmark(true)
    } else {
      setIsBookmark(false)
    }
  }

  const bookmarkHandler = () => {
    console.log(bookmarkList)
    dispatch(addBookmark(item))
    console.log(bookmarkList)
    isBookmarkHandler()
  }

*/