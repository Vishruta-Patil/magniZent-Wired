import avatar from "assets/avatar.png";
import { HeroBtn } from "components/common/button/HeroBtn";

const UserSidebar = () => {
  return (
    <div className="p-3 m-9 text-secondary-color">
      <h3 className="text-xl m-6 font-extrabold text-secondary-color">Who to Follow</h3>
      <div className="flex flex-col">

        <div className="flex justify-between items-center mb-6 flex-wrap">
          <div className="flex items-center space-x-3">
            <img src={avatar} alt="avatar" className="h-10 w-10 rounded-full" />
            <div className="flex-col">
              <p className="text-black text-base font-semibold">
                Vishruta Patil
              </p>
              <p className="text-secondary-color text-sm">@Vishruta_patil</p>
            </div>
          </div>
          <HeroBtn classnames="px-8 m-3 text-sm text-white-neutral rounded-full">
            follow
          </HeroBtn>
        </div>

        <div className="flex justify-between items-center mb-6 flex-wrap">
          <div className="flex items-center space-x-3">
            <img src={avatar} alt="avatar" className="h-10 w-10 rounded-full" />
            <div className="flex-col">
              <p className="text-black text-base font-semibold">
                Vishruta Patil
              </p>
              <p className="text-secondary-color text-sm">@Vishruta_patil</p>
            </div>
          </div>
          <HeroBtn classnames="px-8 m-3 text-sm text-white-neutral rounded-full">
            follow
          </HeroBtn>
        </div>

        <div className="flex justify-between items-center mb-6 flex-wrap">
          <div className="flex items-center space-x-3">
            <img src={avatar} alt="avatar" className="h-10 w-10 rounded-full" />
            <div className="flex-col">
              <p className="text-black text-base font-semibold">
                Vishruta Patil
              </p>
              <p className="text-secondary-color text-sm">@Vishruta_patil</p>
            </div>
          </div>
          <HeroBtn classnames="px-8 m-3 text-sm text-white-neutral rounded-full">
            follow
          </HeroBtn>
        </div>

      </div>
    </div>
  );
};

export default UserSidebar;
