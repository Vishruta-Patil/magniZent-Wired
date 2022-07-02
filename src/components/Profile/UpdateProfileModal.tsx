import avatar from "assets/avatar.png";
import { HeroBtn } from "components/common/button/HeroBtn";

export const UpdateProfileModal = () => {
  return (
    <section className="p-7 max-w-md bg-slate-200 shadow-lg absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex">
        <h1 className="font-bold text-xl mb-7 text-center">Edit Profile</h1>
        <span className="material-icons text-3xl ml-auto">close</span>
      </div>
      <div className="flex mb-5  items-center">
        <label className="inline-block w-24">Avatar</label>
        <div className="relative ">
          <img src={avatar} alt="avatar" className="h-14 w-14 rounded-full relative " />
          <span className="material-icons text-lg ml-auto absolute bottom-0 right-0 cursor-pointer">add_a_photo</span>
          <input type="file" accept="image/*" className="w-5 h-5 opacity-0 absolute bottom-0 right-0 cursor-pointer bg-blue-700" />
        </div>
      </div>
      <div className="flex mb-5">
        <label className="inline-block w-24">Name</label>
        <input
          type="text"
          className="border-secondary-color border-2 rounded bg-transparent"
        />
      </div>
      <div className="flex mb-5">
        <label className="inline-block w-24">Username</label>
        <input
          type="text"
          className="border-secondary-color border-2 rounded bg-transparent"
        />
      </div>
      <div className="flex mb-5">
        <label className="inline-block w-24 ">Bio</label>
        <input
          type="text"
          className="border-secondary-color border-2 rounded bg-transparent"
        />
      </div>
      <div className="flex mb-5">
        <label className="inline-block w-24">Website</label>
        <input
          type="text"
          className="border-secondary-color border-2 rounded bg-transparent"
        />
      </div>

      <HeroBtn classnames="w-11/12 mt-5">Update</HeroBtn>
    </section>
  );
};

// Center Div : absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
