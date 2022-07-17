import { useAppDispatch, useAppSelector } from "hooks";
import { NavLink } from "react-router-dom";
import { logoutUser } from "redux/slices/authSlice";

const Drawer = () => {
  const {authToken} = useAppSelector(store => store.auth)
const dispatch = useAppDispatch()
  let activeStyle: any = {
    color: "#0072FF",
    fontWeight: 700
  };

  return (
    <div className="p-3 mt-9 m-3 text-secondary-color sticky top-5">
       {/* fixed top-20 overflow-hidden h-full  */}
      <div className="flex flex-col text-xl">
        <NavLink
          to="/"
          style={({ isActive }: { isActive: boolean }) =>
            isActive ? activeStyle : undefined
          }
        >
          <div className="flex space-x-3 items-center mb-7 justify-center">
            <span className="material-icons text-4xl">home</span>
          </div>
        </NavLink>

        <NavLink
          to="/explore"
          style={({ isActive }: { isActive: boolean }) =>
            isActive ? activeStyle : undefined
          }
        >
        <div className="flex space-x-3 items-center mb-7 justify-center">
          <span className="material-icons text-4xl">explore</span>
        </div>
        </NavLink>

        <NavLink
          to="/connections"
          style={({ isActive }: { isActive: boolean }) =>
            isActive ? activeStyle : undefined
          }
        >
        <div className="flex space-x-3 items-center mb-7 justify-center">
          <span className="material-icons text-4xl">group_add</span>
        </div>
        </NavLink>

        <NavLink
          to="/bookmark"
          style={({ isActive }: { isActive: boolean }) =>
            isActive ? activeStyle : undefined
          }
        >
        <div className="flex space-x-3 items-center mb-7 justify-center">
          <span className="material-icons text-4xl">bookmark</span>
        </div>
        </NavLink>

        <NavLink
          to={`/profile/${authToken}`}
          style={({ isActive }: { isActive: boolean }) =>
            isActive ? activeStyle : undefined
          }
        >
        <div className="flex space-x-3 items-center justify-center mb-7">
          <span className="material-icons text-4xl">person</span>
        </div>
        </NavLink>

        <div
          onClick={() => dispatch(logoutUser())}
        >
        {/* absolute bottom-5 */}
        <div className="flex space-x-3 items-center justify-center mb-7 cursor-pointer"> 
          <span className="material-icons text-4xl">logout</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
