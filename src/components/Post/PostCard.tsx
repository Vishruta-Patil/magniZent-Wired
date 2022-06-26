import avatar from "assets/avatar.png";

const PostCard = () => {
  return (
    <div className="p-5 m-9 bg-white-neutral shadow-lg flex space-x-3 ">
      <img src={avatar} alt="avatar" className="h-16 w-16 rounded-full" />
      <div>
        <div className="flex space-x-3 items-center my-2">
          <p className="text-black text-xl font-semibold">Vishruta Patil</p>
          <p className="text-secondary-color text-sm">@Vishruta_patil</p>
          <p className="text-secondary-color text-sm">1 min</p>
        </div>
        <div className="text-left">
          Shree Krishna Govinda Harae Murari Hae Nath Narayan Vasudeva, Radhae Radhae!!
        </div>
        <div className="flex justify-between mt-3">
          <span className="material-icons text-2xl">favorite_outline</span>
          <span className="material-icons text-2xl">comment</span>
          <span className="material-icons text-2xl">share</span>
          <span className="material-icons text-2xl">bookmark_outline</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
