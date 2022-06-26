import avatar from "assets/avatar.png";
import icon from "assets/icon.png";
import SearchUser from "components/common/search/SearchUser";

const Header = () => {
  return (
    <div className="p-2 pl-4 pr-9 flex justify-between shadow-sm items-center">
      <div className="flex space-x-5 items-center">
        <img src={icon} alt="" className="w-14 h-14" />
        <h1 className="text-primary-color font-roboto font-bold text-4xl">
          magni<span className="text-secondary-color text-5xl">Z</span>ent
        </h1>
      </div>
      <SearchUser />
      <img src={avatar} alt="avatar" className="h-12 w-12 rounded-full" />
    </div>
  );
};

export default Header;
