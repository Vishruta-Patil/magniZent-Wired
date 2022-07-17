import { useAppSelector } from "hooks";
import { NavLink } from "react-router-dom";

export const MobileNav = () => {
  const {authToken} = useAppSelector(store => store.auth)

  const menuData = [
    { name: "home", link: "/" },
    { name: "explore", link: "/explore" },
    { name: "group_add", link: "/connections" },
    { name: "bookmark", link: "/bookmark" },
    { name: "person", link: `/profile/${authToken}`},
  ];

  let activeStyle: any = {
    color: "#0072FF",
    fontWeight: 700,
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-secondary-pale py-1 flex justify-around text-black">
      {menuData.map((icon, index) => (
        <NavLink
          to={icon.link}
          style={({ isActive }: { isActive: boolean }) =>
            isActive ? activeStyle : undefined
          }
        >
          <span className="material-icons text-4xl" key={index}>
            {icon.name}
          </span>
        </NavLink>
      ))}
    </div>
  );
};
