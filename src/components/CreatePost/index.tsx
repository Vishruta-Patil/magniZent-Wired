import avatar from "assets/avatar.png";

const CreatePost = () => {
  return (
    <div className="bg-slate-200 p-3 m-9 relative  box">
      <div className="flex space-x-3 items-center mb-9">
        <img src={avatar} alt="avatar" className="h-16 w-16 rounded-full" />
        <textarea
          className="
      bg-slate-200
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700 
        rounded
        transition
        ease-in-out
        m-5
        focus:outline-none
      "
          rows={3}
          placeholder="What's in your mind ?"
        ></textarea>
      </div>
      <button className="bg-primary-color px-8 py-1 text-sm text-white-neutral rounded-full ml-auto absolute right-5 bottom-5">
        Post
      </button>
    </div>
  );
};

export default CreatePost;
