import PostCard from "components/Post/PostCard";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getBookmark } from "services/userService";

export const BookMarkContent = () => {
  const { bookmarkList } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getBookmark())
  }, []);  


  return (
    <div>
      {bookmarkList && bookmarkList.length !== 0 ? (
        bookmarkList?.map((item, index) => <PostCard item={item} key={index} />)
      ) : (
        <h1 className="mt-10 text-2xl font-bold dark:text-white-neutral">No Bookmark</h1>
      )}
    </div>
  );
};