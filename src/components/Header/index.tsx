import icon from "assets/icon.png";
import SearchUser from "components/common/search/SearchUser";
import { useAppDispatch, useAppSelector } from "hooks";
import { Link } from "react-router-dom";
import { logoutUser } from "redux/slices/authSlice";
import { Avatar } from "components/common/avatar/Avatar";

const Header = () => {
  const dispatch = useAppDispatch()
  const {authToken, allUsers} = useAppSelector((store) => store.auth)
  const {avatar} = useAppSelector(store => store.auth)

  let userDetails: any = allUsers.find((user) => user?.id === authToken)
  return (
    <div className="p-2 pl-4 pr-9 flex justify-between shadow-sm items-center">
      <Link to="/">
        <div className="flex space-x-3 items-center">
          <img src={icon} alt="" className="md:w-14 md:h-14 w-12 h-12" />
          <h1 className="text-primary-color font-roboto font-bold md:text-4xl text-3xl">
            magni<span className="text-secondary-color md:text-5xl text-4xl">Z</span>ent
          </h1>
        </div>
      </Link>

      <div className="md:w-7/12 justify-center m-auto items-center">
      <SearchUser classnames="hidden md:block md:w-full m-auto justify-center"/>
      </div> 

      {/* wierd error */}
      <div onClick={() => dispatch(logoutUser())}></div> 

      <Link to={authToken ? `/profile/${authToken}` : '/login'}>
      {authToken && <Avatar classnames="w-12 h-12" profileAvatar={userDetails?.avatarUrl} id={authToken}/> }
      </Link>
      
      
    </div>
  );
};

export default Header;
