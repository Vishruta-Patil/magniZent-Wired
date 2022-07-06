import avatar from "assets/avatar.png";
import { HeroBtn } from "components/common/button/HeroBtn";

const CreatePost = () => {
  return (
    <div className="bg-slate-200 p-3 m-9 relative">
      <div className="flex space-x-3 items-center mb-9">
        <img src={avatar} alt="avatar" className="h-16 w-16 rounded-full" />
        <textarea
          className="
      bg-slate-200
        w-full
        px-3
        py-1.5
        text-lg
        text-secondary-color
        m-5
        focus:outline-none
      "
          rows={3}
          placeholder="What's in your mind ?"
        ></textarea>
      </div>
      <HeroBtn classnames="px-8 text-sm rounded-full ml-auto absolute right-5 bottom-5">
        Post
      </HeroBtn>
    </div>
  );
};

export default CreatePost;
