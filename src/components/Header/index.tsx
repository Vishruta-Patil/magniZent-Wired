import avatar from "assets/avatar.png";
import icon from "assets/icon.png";
import SearchUser from "components/common/search/SearchUser";
import { useAppDispatch } from "hooks";
import { Link } from "react-router-dom";
import { logoutUser } from "redux/slices/authSlice";

const Header = () => {
  const dispatch = useAppDispatch()
  return (
    <div className="p-2 pl-4 pr-9 flex justify-between shadow-sm items-center">
      <Link to="/">
        <div className="flex space-x-3 items-center">
          <img src={icon} alt="" className="w-14 h-14" />
          <h1 className="text-primary-color font-roboto font-bold text-4xl">
            magni<span className="text-secondary-color text-5xl">Z</span>ent
          </h1>
        </div>
      </Link>
      <SearchUser />
      <img src={avatar} alt="avatar" className="h-12 w-12 rounded-full"/>
      <button onClick={() => dispatch(logoutUser())}>logout</button>
    </div>
  );
};

export default Header;
