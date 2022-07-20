import { Avatar } from "components/common/avatar/Avatar";
import { HeroBtn } from "components/common/button/HeroBtn";
import { useAppDispatch, useAppSelector } from "hooks";
import { useState } from "react";
import { createNewPost, getAllPosts } from "services/postsServices";

const CreatePost = () => {
  const { avatar, authToken, allUsers } = useAppSelector((store) => store.auth);
  const [post, setPost] = useState("");
  const dispatch = useAppDispatch();

  const newPostHandler = () => {
    dispatch(createNewPost({ post, authToken }));
    dispatch(getAllPosts())
    setPost("");
  };

  let userDetails: any = allUsers.find((user) => user?.id === authToken);

  return (
    <div className="bg-secondary-pale p-3 my-9 md:m-9 lg:mx-14 md:mx-9 m-4 relative lg:mb-20 shadow-lg">
      <div className="flex space-x-3 items-center mb-9">
        <Avatar
          classnames={"h-16 w-16"}
          profileAvatar={userDetails?.avatarUrl}
          id={authToken}
        />
        <textarea
          className="
          bg-secondary-pale
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
      <HeroBtn
        classnames="px-10 font-bold text-md rounded-full ml-auto absolute right-5 bottom-5"
        eventHandler={newPostHandler}
        disableProperty={post===""}
      >
        Post
      </HeroBtn>
    </div>
  );
};

export default CreatePost;
