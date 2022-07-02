import avatar from "assets/avatar.png";
import { HeroBtn } from "components/common/button/HeroBtn";
import { OutlineBtn } from "components/common/button/OutlineBtn";
import { UpdateProfileModal } from "./UpdateProfileModal";

export const Userprofile = () => {
  return (
    <div>
    <section className="p-7 m-9 mx-20 relative bg-white-neutral shadow-lg">
      <div className="flex items-start">
        <img src={avatar} alt="avatar" className="h-24 w-24 rounded-full" />
        
          <div className="ml-5 text-left text-secondary-color ">
            <p className="text-2xl text-primary-color font-semibold  mb-1">
              Vishruta Patil
            </p>
            <p className="text-lg mb-1">@vishruta_patil</p>
            <p className="mb-1 text-lg">Solving problems through code</p>
            <p className="mb-1 text-lg">vishrutapatil.netlify.app</p>

            <div className="flex gap-6 mt-7 font-semibold">
              <p>2 Posts</p>
              <p>10 Followers</p>
              <p>15 Following</p>
            </div>
            <HeroBtn classnames="w-11/12 mt-3">Logout</HeroBtn>
          </div>
          <OutlineBtn classnames="ml-auto">Edit Profile</OutlineBtn>
        
      </div>

      
      
    </section>

    <UpdateProfileModal /></div>
  );
};
