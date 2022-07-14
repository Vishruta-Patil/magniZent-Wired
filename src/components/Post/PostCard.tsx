import { CreateComment } from "../Comment/CreateComment";
import { useEffect, useState } from "react";
import { CommentCard } from "components/Comment/CommentCard";
import { MoreOptionsmOdal } from "components/common/moreOptions/MoreOptionsModal";
import { Avatar } from "components/common/avatar/Avatar";
import { useAppDispatch, useAppSelector } from "hooks";
import { EditPostModal } from "components/common/modal/EditPostModal";
import { addBookmark, getBookmark, removeBookmark } from "services/userService";

const PostCard = ({ item }: { item: any }) => {
  const [commentCard, setCommentCard] = useState(false);
  const [moreOptions, setMoreOPtions] = useState(false);
  const [editPostModal, setEditPostModal] = useState(false);

  const { allUsers, avatarList, authToken } = useAppSelector(
    (store) => store.auth
  );
  let userDetails: any = allUsers.find((user) => user?.id === item?.id);
  const getUserAvatar = avatarList.find(
    (user: any) => user?.id === userDetails?.id
  );

  const commentHandler = () => {
    setCommentCard((prev) => !prev);
  };

  const { bookmarkList } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const isBookmark =
    bookmarkList && bookmarkList.some((data: any) => item.uid === data.uid);

  const [isSaved, setISaved] = useState(isBookmark);

  const bookmarkHandler = () => {
    dispatch(addBookmark({ bookmarkList, item }));
    setISaved((prev) => !prev);
  };

  const removebBookmarkHandler = () => {
    dispatch(removeBookmark({ bookmarkList, item }));
    setISaved((prev) => !prev);
  };

  useEffect(() => {
    dispatch(getBookmark());
  }, [isSaved]);

  const isBookmarkPath = window.location.pathname === "/bookmark"

  return (
    <div className="flex flex-col p-5 md:m-9 m-4 bg-white-neutral shadow-lg ">
      <div className="flex flex-col space-x-3">
        <div className="flex  gap-3 relative">
          <Avatar
            classnames="h-14 w-14"
            profileAvatar={getUserAvatar?.url}
            id={userDetails?.id}
          />
          <div>
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <p className="text-black text-xl font-semibold">
                  {userDetails?.name}
                </p>
                <p className="text-secondary-color text-sm md:block hidden">
                  1 min
                </p>
              </div>

              <p className="text-secondary-color text-sm text-left">
                @{userDetails?.username}
              </p>
            </div>

            <div
              onClick={() => setMoreOPtions((prev) => !prev)}
              className="ml-auto absolute top-2 right-0"
            >
              {!isBookmarkPath &&(
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
            <span className="material-icons text-2xl cursor-pointer p-2 rounded-full hover:bg-slate-200">
              favorite_outline
            </span>
            <p>1</p>
          </div>
          <div>
            <span
              className="material-icons text-2xl cursor-pointer p-2 rounded-full hover:bg-slate-200"
              onClick={commentHandler}
            >
              comment
            </span>
          </div>
          <div>
            <span className="material-icons text-2xl cursor-pointer p-2 rounded-full hover:bg-slate-200">
              share
            </span>
          </div>
          <div>
            {isSaved ? (
              <span
                onClick={removebBookmarkHandler}
                className="material-icons text-2xl cursor-pointer p-2 rounded-full hover:bg-slate-200"
              >
                bookmark
              </span>
            ) : (
              <span
                onClick={bookmarkHandler}
                className="material-icons text-2xl cursor-pointer p-2 rounded-full hover:bg-slate-200"
              >
                bookmark_outline
              </span>
            )}
          </div>
        </div>
      </div>

      <>
        {commentCard && (
          <CreateComment
            commentCard={commentCard}
            setCommentCard={setCommentCard}
          />
        )}
      </>
      {/* <CommentCard /> */}
    </div>
  );
};

export default PostCard;
