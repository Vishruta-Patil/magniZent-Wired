import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getAllUsers } from "services/authService";
import { UserCard } from "./UserCard";

const UserSidebar = () => {
  const { allUsers } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="p-3 mt-9 m-3 text-secondary-color sticky top-5">
      <h3 className="text-xl m-6 font-extrabold text-secondary-color">
        Who to Follow
      </h3>
      <div className="flex flex-col">
        {allUsers.map((item, index) => (
          <UserCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default UserSidebar;
