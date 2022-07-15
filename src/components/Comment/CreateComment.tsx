import avatar from "assets/avatar.png";
import React, { SetStateAction, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getAllUsers } from "services/authService";
import { addComment } from "services/userService";
import { type } from "@testing-library/user-event/dist/type";
import { CommentData } from "types/user.types";

export const CreateComment = ({postId} : {postId:string}) => {
  const [commentText, setCommentText] = useState("");
  const authToken = localStorage.getItem("authToken");
  const { allUsers } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  const getUser = allUsers.find((user) => user.id === authToken);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const addCommentHandler = () => {
    const data: CommentData = {
      id: authToken,
      name: getUser?.name,
      username: getUser?.username,
      comment: commentText,
    };

    dispatch(addComment({ postId, data }));
    setCommentText("")
  };

  
  return (
    <div className="flex gap-4 border-2 rounded-3xl mt-2 p-5 md:m-9 m-4 lg:mx-14 md:mx-9 items-center">
      <img src={avatar} className="h-12 w-12 rounded-full" />
      <textarea
        placeholder="Pen down your views"
        className="bg-transparent flex-1 outline-none"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <span
        className="material-icons text-2xl cursor-pointer"
        onClick={addCommentHandler}
      >
        send
      </span>
    </div>
  );
};
