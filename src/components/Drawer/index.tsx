import { HeroBtn } from "components/common/button/HeroBtn";
import { useAppSelector } from "hooks";
import { NavLink } from "react-router-dom";

const Drawer = () => {
  const {authToken} = useAppSelector(store => store.auth)

  let activeStyle: any = {
    color: "#0072FF"
  };

  return (
    <div className="p-3 m-3 mt-9  lg:m-9 text-secondary-color">
      <div className="flex flex-col text-xl">
        <NavLink
          to="/"
          style={({ isActive }: { isActive: boolean }) =>
            isActive ? activeStyle : undefined
          }
        >
          <div className="flex space-x-3 items-center mb-7 font-bold ">
            <span className="material-icons text-3xl">home</span>
            <p>Home</p>
          </div>
        </NavLink>

        <NavLink
          to="/explore"
          style={({ isActive }: { isActive: boolean }) =>
            isActive ? activeStyle : undefined
          }
        >
        <div className="flex space-x-3 items-center mb-7">
          <span className="material-icons text-3xl">explore</span>
          <p>Explore</p>
        </div>
        </NavLink>

        <NavLink
          to="/bookmark"
          style={({ isActive }: { isActive: boolean }) =>
            isActive ? activeStyle : undefined
          }
        >
        <div className="flex space-x-3 items-center mb-7">
          <span className="material-icons text-3xl">bookmark</span>
          <p>Bookmark</p>
        </div>
        </NavLink>

        <NavLink
          to="/notification"
          style={({ isActive }: { isActive: boolean }) =>
            isActive ? activeStyle : undefined
          }
        >
        <div className="flex space-x-3 items-center mb-7">
          <span className="material-icons text-3xl">notifications</span>
          <p>Notification</p>
        </div>
        </NavLink>

        <NavLink
          to={`/profile/${authToken}`}
          style={({ isActive }: { isActive: boolean }) =>
            isActive ? activeStyle : undefined
          }
        >
        <div className="flex space-x-3 items-center mb-7">
          <span className="material-icons text-3xl">person</span>
          <p>Profile</p>
        </div>
        </NavLink>

        <HeroBtn classnames="lg:w-3/4">Create New Post</HeroBtn>
      </div>
    </div>
  );
};

export default Drawer;
