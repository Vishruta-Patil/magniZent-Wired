import icon from "assets/icon.png";
import SearchUser from "components/common/search/SearchUser";
import { useAppDispatch, useAppSelector } from "hooks";
import { Link } from "react-router-dom";
import { logoutUser } from "redux/slices/authSlice";
import { Avatar } from "components/common/avatar/Avatar";
import { darkThemeHandler, lightThemeHandler } from "redux/slices/themeSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { authToken, allUsers } = useAppSelector((store: any) => store.auth);
  const { avatar } = useAppSelector((store: any) => store.auth);

  const { theme } = useAppSelector((store: any) => store.theme);

  let userDetails: any = allUsers.find((user: any) => user?.id === authToken);
  return (
    <div className="p-2 pl-4 pr-9 flex justify-between shadow-sm items-center dark:bg-dark-drawer-color dark:border-overlay-color border-b-4">
      <Link to="/">
        <div className="flex space-x-3 items-center">
          <img src={icon} alt="" className="md:w-14 md:h-14 w-12 h-12" />
          <h1 className="text-primary-color font-roboto font-bold md:text-4xl text-3xl dark:text-white-neutral">
            magni
            <span className="text-secondary-color md:text-5xl text-4xl dark:text-primary-color">Z</span>
            ent
          </h1>
        </div>
      </Link>

      <div className="md:w-7/12 justify-center m-auto items-center">
        <SearchUser classnames="hidden md:block md:w-full m-auto justify-center" />
      </div>

      {/* wierd error */}
      <div onClick={() => dispatch(logoutUser())}></div>

      {theme === "dark" ? (
        <span
          className="material-icons text-4xl cursor-pointer text-secondary-color"
          onClick={() => dispatch(lightThemeHandler())}
        >
          light_mode
        </span>
      ) : (
        <span
          className="material-icons text-4xl cursor-pointer text-secondary-color"
          onClick={() => dispatch(darkThemeHandler())}
        >
          dark_mode
        </span>
      )}
    </div>
  );
};

export default Header;
