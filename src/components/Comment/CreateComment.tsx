import { useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getAllUsers } from "services/authService";
import { addComment } from "services/userService";
import { CommentDataType } from "types/user.types";
import { getAllPosts } from "services/postsServices";
import { Avatar } from "components/common/avatar/Avatar";

export const CreateComment = ({postId} : {postId:string}) => {
  const [commentText, setCommentText] = useState("");
  const authToken = localStorage.getItem("authToken");
  const { allUsers, avatar } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const addCommentHandler = () => {
    const getUser:any = allUsers.find((user) => user.id === authToken);

    const data: CommentDataType = {
      id: authToken,
      name: getUser?.name,
      username: getUser?.username,
      comment: commentText,
    };

    dispatch(addComment({ postId, data }));
    dispatch(getAllPosts())
    setCommentText("")
  };

  const getUser:any = allUsers.find((user) => user.id === authToken);

  return (
    <div className="flex gap-4 border-2 rounded-3xl mt-2 p-5 md:m-9 m-4 lg:mx-14 md:mx-9 items-center">
      
      <Avatar
            classnames="h-12 w-12"
            profileAvatar={getUser?.avatarUrl}
            id={getUser?.id}
          />
      <textarea
        placeholder="Pen down your views"
        className="bg-transparent flex-1 outline-none"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <span
        className="material-icons text-2xl cursor-pointer dark:text-white-neutral"
        onClick={addCommentHandler}
      >
        send
      </span>
    </div>
  );
};
