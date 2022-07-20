import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getAllUsers } from "services/authService";
import { UserCard } from "./UserCard";

const UserSidebar = () => {
  const { allUsers, authToken } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const userList = allUsers.filter(user => user.id !== authToken)

  return (
    <div className="p-6 pt-9 text-secondary-color dark:text-white-neutral sticky top-5 dark:bg-dark-drawer-color">
      <h3 className="text-xl m-6 font-extrabold text-secondary-color dark:text-white-neutral">
        Who to Follow
      </h3>
      <div className="flex flex-col">
        {userList.map((item, index) => (
          <UserCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default UserSidebar;
