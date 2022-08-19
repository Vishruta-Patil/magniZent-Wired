import { useAppDispatch } from "hooks";
import { useClickOutside } from "hooks/useClickOutside";
import React, { SetStateAction, useRef } from "react";
import { deletePost, getAllPosts } from "services/postsServices";
import { deleteComment } from "services/userService";
import { CommentDataType } from "types/user.types";

export const MoreOptionsmOdal = ({
  userId,
  postId,
  setMoreOPtions,
  setEditPostModal,
  comment,
  commentDetails
}: {
  userId?: string;
  postId?: string;
  setMoreOPtions?: React.Dispatch<SetStateAction<boolean>>;
  setEditPostModal?:React.Dispatch<SetStateAction<boolean>>;
  comment?:boolean;
  commentDetails?:CommentDataType
}) => {
  const dataId = localStorage.getItem("authToken");
  const dispatch = useAppDispatch();
  

  const deletePostHandler = () => {
    dispatch(deletePost(postId));
    setMoreOPtions && setMoreOPtions((prev: boolean) => !prev);
    dispatch(getAllPosts())
  };

  const editPostHandler = () => {
    setEditPostModal && setEditPostModal(true)
    setMoreOPtions && setMoreOPtions((prev: boolean) => !prev);
    dispatch(getAllPosts())
  }

  const deleteCommentHandler = () => {
    const data:CommentDataType = {
      id: commentDetails?.id,
      name: commentDetails?.name,
      username: commentDetails?.username,
      comment: commentDetails?.comment,
    }
    postId && dispatch(deleteComment({postId, data}))
    setMoreOPtions && setMoreOPtions(false);
  }

  let ref = useRef()

  let requiredNode:any = useClickOutside(() => {
    setMoreOPtions && setMoreOPtions(false)
  })

  


  return (
    <div >
    <div className="bg-slate-100 absolute top-10 right-0 w-40 md:w-60 rounded-lg border-2 dark:bg-dark-highlight-color">
      {comment ? <>
          <div
            className="flex gap-4 p-2 items-center cursor-pointer hover:bg-slate-200 dark:hover:bg-dark-drawer-color text-red-500"
            onClick={deleteCommentHandler}
          >
            <span className="material-icons text-2xl cursor-pointer">
              delete
            </span>
            <p className="text-base">Delete Comment</p>
          </div>
        </>
      :
      userId === dataId ? (
        <>
          <div className="flex gap-4 items-center mb-1 cursor-pointer hover:bg-slate-200 dark:hover:bg-dark-drawer-color p-2" onClick={editPostHandler}>
            <span className="material-icons text-xl md:text-2xl cursor-pointer">
              edit
            </span>
            <p className="text-base">Edit</p>
          </div>
          <div
            className="flex gap-4 items-center cursor-pointer hover:bg-slate-200 text-red-500 dark:hover:bg-dark-drawer-color p-2 rounded"
            onClick={deletePostHandler}
          >
            <span className="material-icons text-2xl cursor-pointer">
              delete
            </span>
            <p className="text-base">Delete</p>
          </div>
        </>
      ) : (
        <div className="flex gap-4 items-center p-2">
          <span className="material-icons text-2xl cursor-pointer">add</span>
          <p className="text-base">Follow</p>
        </div>
      )}
    </div>
    </div>
  );
};
