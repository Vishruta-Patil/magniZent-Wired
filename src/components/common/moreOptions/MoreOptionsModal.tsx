import { useAppDispatch } from "hooks";
import React, { SetStateAction } from "react";
import { deletePost } from "services/postsServices";

export const MoreOptionsmOdal = ({
  userId,
  postId,
  setMoreOPtions,
  setEditPostModal
}: {
  userId?: string;
  postId?: string;
  setMoreOPtions?: React.Dispatch<SetStateAction<boolean>>;
  setEditPostModal?:React.Dispatch<SetStateAction<boolean>>;
}) => {
  const dataId = localStorage.getItem("authToken");
  const dispatch = useAppDispatch();

  const deletePostHandler = () => {
    dispatch(deletePost(postId));
    setMoreOPtions && setMoreOPtions((prev: boolean) => !prev);
  };

  const editPostHandler = () => {
    setEditPostModal && setEditPostModal(true)
    setMoreOPtions && setMoreOPtions((prev: boolean) => !prev);
  }

  return (
    <div className="bg-slate-100 p-2 absolute top-10 right-0 w-40 md:w-60 rounded border-2">
      {userId === dataId ? (
        <>
          <div className="flex gap-4 items-center mb-2 cursor-pointer hover:bg-slate-200 p-1" onClick={editPostHandler}>
            <span className="material-icons text-xl md:text-2xl cursor-pointer">
              edit
            </span>
            <p className="text-base">Edit</p>
          </div>
          <div
            className="flex gap-4 items-center cursor-pointer hover:bg-slate-200 p-1"
            onClick={deletePostHandler}
          >
            <span className="material-icons text-2xl cursor-pointer">
              delete
            </span>
            <p className="text-base">Delete</p>
          </div>
        </>
      ) : (
        <div className="flex gap-4 items-center">
          <span className="material-icons text-2xl cursor-pointer">add</span>
          <p className="text-base">Follow</p>
        </div>
      )}
    </div>
  );
};