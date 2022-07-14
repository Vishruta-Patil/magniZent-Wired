import { useAppDispatch, useAppSelector } from "hooks";
import React, { SetStateAction, useState } from "react";
import { Avatar } from "../avatar/Avatar";
import { HeroBtn } from "../button/HeroBtn";
import { editPostService } from "services/postsServices";

export const EditPostModal = ({
  content,
  setEditPostModal,
  postId,
  userDetails
}: {
  content: string;
  setEditPostModal: React.Dispatch<SetStateAction<boolean>>;
  postId:string
  userDetails: any
}) => {
  const { avatar, authToken } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();
  const [updatedPost, setUpdatedPost] = useState<string>(content);

  const editPost = () => {
    dispatch(editPostService({updatedPost,postId}));
    setEditPostModal(false);
  };

  return (
    <div className="fixed p-4 inset-0 h-screen z-50 flex justify-center items-center bg-overlay-color">
      <div className=" bg-slate-200 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6/12 lg:w-3/12 min-w-[90%] md:min-w-[70%] lg:min-w-[40%] p-4">
        <div className="flex gap-3 text-left">
          <Avatar profileAvatar={avatar} classnames="w-14 h-14" id={authToken}/>
          <div className="flex flex-col ">
            <p className="text-lg font-semibold">{userDetails?.name}</p>
            <p>@{userDetails?.username}</p>
          </div>
          <span
            className="material-icons ml-auto cursor-pointer"
            onClick={() => setEditPostModal(false)}
          >
            close
          </span>
        </div>
        <textarea
          className="bg-transparent
        w-11/12
        text-base
        md:text-lg
        text-secondary-color
        mt-5
        focus:outline-none
        mb-12
        resize-none
        overflow-hidden
        min-h-[50%]
        h-auto  
        "
          value={updatedPost}
          placeholder="Here will be input"
          onChange={(e) => {
            setUpdatedPost(e.target.value);
          }}
        />

        <HeroBtn
          classnames="ml-auto absolute bottom-5 right-5"
          eventHandler={editPost}
        >
          Post
        </HeroBtn>
      </div>
    </div>
  );
};

 /* for reference */
// fixed p-4 left-0 right-0 top-0 h-screen z-50 flex justify-center items-center bg-overlay-color
// bg-slate-200 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8/12  min-w-[60%] p-4
