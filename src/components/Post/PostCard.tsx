import { useEffect, useState } from "react";
import { MoreOptionsmOdal } from "components/common/moreOptions/MoreOptionsModal";
import { Avatar } from "components/common/avatar/Avatar";
import { useAppDispatch, useAppSelector } from "hooks";
import { EditPostModal } from "components/common/modal/EditPostModal";
import {
  addBookmark,
  decrementLike,
  getBookmark,
  incrementLike,
  removeBookmark,
} from "services/userService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { getAllPosts } from "services/postsServices";

const PostCard = ({ item }: { item: any }) => {
  const [moreOptions, setMoreOPtions] = useState(false);
  const [editPostModal, setEditPostModal] = useState(false);
  // const datereq = new Date(item?.createdAt.seconds*1000).toLocaleDateString()  <<< TODO

  const { allUsers, avatarList, authToken } = useAppSelector(
    (store) => store.auth
  );

  let userDetails: any = allUsers.find((user) => user?.id === item?.id);
  
  const getUserAvatar = avatarList.find(
    (user: any) => user?.id === userDetails?.id
  );
  const [avatar, setAvatar] = useState(getUserAvatar)  //change 2

  useEffect(() => {
    setAvatar(getUserAvatar)
  }, [avatarList])
  
  const { bookmarkList } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const isBookmark =
    bookmarkList ? bookmarkList.some((data: any) => item?.uid === data?.uid) : false
  const likedByList = item?.likes?.likedBy;
  const checkLiked =
    likedByList && likedByList.some((data: string) => data === authToken);

  const [isSaved, setISaved] = useState<boolean>(isBookmark);
  const [isLiked, setIsLiked] = useState(checkLiked);


  const bookmarkHandler = () => {
    dispatch(addBookmark({ bookmarkList, item }));
    setISaved((prev) => !prev);
  };

  const removeBookmarkHandler = () => {
    dispatch(removeBookmark({ bookmarkList, item }));
    setISaved((prev) => !prev);
  };

  const likeHandler = () => {
    dispatch(incrementLike({ postId: item.uid, userId: authToken }));
    setIsLiked((prev: boolean) => !prev);
    dispatch(getAllPosts());
  };

  const removeLikeHandler = () => {
    dispatch(decrementLike({ postId: item.uid, userId: authToken}))
    setIsLiked((prev: boolean) => !prev);
    dispatch(getAllPosts());
  };

  useEffect(() => {
    dispatch(getBookmark());
  }, [isSaved]);

  const isBookmarkPath = window.location.pathname === "/bookmark";

  const sharePost = () => {
    navigator.clipboard.writeText(`https://magnizent-wired.netlify.app/posts/${item?.uid}`)
    toast.success("Link copied, share the post now!")
  }

  const pathname = window.location.pathname

  const userId = item?.id
  
  useEffect(() => {
    setIsLiked(checkLiked)
  }, [userId])

  return (
    <div className="flex flex-col p-5 md:m-9 m-4 lg:mx-14 md:mx-9 bg-white-neutral rounded-lg shadow-lg dark:bg-dark-highlight-color dark:text-white-neutral">
      <div className="flex flex-col space-x-3">
        <div className="flex  gap-3 relative">
          <Avatar
            classnames="h-14 w-14"
            profileAvatar={userDetails?.avatarUrl}
            id={userDetails?.id}
          />
          <div>
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <p className="text-black text-xl font-semibold dark:text-white-neutral">
                  {userDetails?.name}
                </p>
                {/* <p className="text-secondary-color text-sm md:block hidden">
                  {datereq}
                </p> */}
              </div>

              <p className="text-secondary-color text-sm text-left">
                @{userDetails?.username}
              </p>
            </div>

            <div
              onClick={() => setMoreOPtions((prev) => !prev)}
              className="ml-auto absolute top-2 right-0"
            >
              {!isBookmarkPath && (
                <span className="material-icons text-2xl cursor-pointer ml-auto">
                  more_vert
                </span>
              )}
            </div>
          </div>
          {editPostModal && (
            <EditPostModal
              userDetails={userDetails}
              content={item?.content}
              setEditPostModal={setEditPostModal}
              postId={item?.uid}
            />
          )}
          {moreOptions && (
            <MoreOptionsmOdal
              userId={userDetails?.id}
              postId={item?.uid}
              setMoreOPtions={setMoreOPtions}
              setEditPostModal={setEditPostModal}
            />
          )}
        </div>
        <div className="text-left mt-5 text-base">{item?.content}</div>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            {isLiked ? (
              <span onClick={removeLikeHandler} className="material-icons text-2xl text-primary-color cursor-pointer p-2 rounded-full hover:bg-slate-200 dark:hover:bg-dark-drawer-color">
                favorite
              </span>
            ) : (
              <span onClick={likeHandler} className="material-icons text-2xl cursor-pointer p-2 rounded-full hover:bg-slate-200 dark:hover:bg-dark-drawer-color">
                favorite_outline
              </span>
            )}

            <p>{item?.likes?.likeCount > 0 && item?.likes?.likeCount}</p>
          </div>

          <Link to={`posts/${item?.uid}`}>
          <div>
            <span
              className="material-icons text-2xl cursor-pointer p-2 rounded-full hover:bg-slate-200 dark:hover:bg-dark-drawer-color"              
            >
              comment
            </span>
          </div>
          </Link>

          <div>
            <span className="material-icons text-2xl cursor-pointer p-2 rounded-full hover:bg-slate-200 dark:hover:bg-dark-drawer-color" onClick={sharePost}>
              share
            </span>
          </div>
          <div>
            {pathname === "/bookmark" ? <span
                onClick={removeBookmarkHandler}
                className="material-icons text-2xl cursor-pointer p-2 rounded-full hover:bg-slate-200 dark:hover:bg-dark-drawer-color"
              >
                bookmark
              </span> :

            isSaved ? (
              <span
                onClick={removeBookmarkHandler}
                className="material-icons text-2xl cursor-pointer p-2 rounded-full hover:bg-slate-200 dark:hover:bg-dark-drawer-color"
              >
                bookmark
              </span>
            ) : (
              <span
                onClick={bookmarkHandler}
                className="material-icons text-2xl cursor-pointer p-2 rounded-full hover:bg-slate-200 dark:hover:bg-dark-drawer-color"
              >
                bookmark_outline
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
