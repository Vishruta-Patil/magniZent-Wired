import { Avatar } from "components/common/avatar/Avatar";
import { HeroBtn } from "components/common/button/HeroBtn";
import { useAppDispatch, useAppSelector } from "hooks";
import { useState } from "react";
import { createNewPost } from "services/postsServices";

const CreatePost = () => {
  const { avatar, authToken } = useAppSelector((store) => store.auth);
  const [post, setPost] = useState("");
  const dispatch = useAppDispatch()

  const newPostHandler = () => {
    dispatch(createNewPost({post, authToken}))
    setPost("")
  }

  return (
    <div className="bg-slate-200 p-3 my-9 md:m-9 lg:mx-14 md:mx-9 m-4 relative lg:mb-24">
      <div className="flex space-x-3 items-center mb-9">
        <Avatar classnames={"h-16 w-16"} profileAvatar={avatar} id={authToken}/>
        <textarea
          className="
      bg-slate-200
        w-full
        px-3
        py-1.5
        text-base
        md:text-lg
        text-secondary-color
        m-5
        focus:outline-none
      "
          value={post}
          rows={3}
          placeholder="What's in your mind ?"
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
      </div>
      <HeroBtn classnames="px-8 text-sm rounded-full ml-auto absolute right-5 bottom-5" eventHandler={newPostHandler}>
        Post
      </HeroBtn>
    </div>
  );
};

export default CreatePost;
