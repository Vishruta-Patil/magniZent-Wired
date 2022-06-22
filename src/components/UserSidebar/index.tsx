import avatar from "assets/avatar.png";

const UserSidebar = () => {
  return (
    <div className="p-3 m-9 text-secondary-color">
      <h3 className="text-xl m-6 font-extrabold text-secondary-color">Who to Follow</h3>
      <div className="flex flex-col">

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <img src={avatar} alt="avatar" className="h-10 w-10 rounded-full" />
            <div className="flex-col">
              <p className="text-black text-base font-semibold">
                Vishruta Patil
              </p>
              <p className="text-secondary-color text-sm">@Vishruta_patil</p>
            </div>
          </div>
          <button className="bg-primary-color px-8 py-1 text-sm text-white-neutral rounded-full">
            follow
          </button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <img src={avatar} alt="avatar" className="h-10 w-10 rounded-full" />
            <div className="flex-col">
              <p className="text-black text-base font-semibold">
                Vishruta Patil
              </p>
              <p className="text-secondary-color text-sm">@Vishruta_patil</p>
            </div>
          </div>
          <button className="bg-primary-color px-8 py-1 text-sm text-white-neutral rounded-full">
            follow
          </button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <img src={avatar} alt="avatar" className="h-10 w-10 rounded-full" />
            <div className="flex-col">
              <p className="text-black text-base font-semibold">
                Vishruta Patil
              </p>
              <p className="text-secondary-color text-sm">@Vishruta_patil</p>
            </div>
          </div>
          <button className="bg-primary-color px-8 py-1 text-sm text-white-neutral rounded-full">
            follow
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserSidebar;
