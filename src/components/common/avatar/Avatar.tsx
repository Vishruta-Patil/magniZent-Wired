import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getAllAvatars, getAllUsers, getAvatarProfile } from "services/authService";
import { Link } from "react-router-dom";
import {userDetailsType} from "types/auth.types"

export const Avatar = ({
  classnames,
  profileAvatar,
  id
}: {
  classnames: string;
  profileAvatar: string;
  id?:string
}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAvatarProfile());
    dispatch(getAllAvatars())
    dispatch(getAllUsers())
  }, []);

  const { allUsers } = useAppSelector((store) => store.auth);
  let userDetails:userDetailsType|undefined = allUsers.find((user) => user?.id === id);

  return (
    <>
    <Link to={`/profile/${id}`}>
      {profileAvatar == "" ? (
        <div className={`h-14 w-14 rounded-full relative bg-blue-500 text-white-neutral flex items-center justify-center text-lg md:text-xl ${classnames}`}>
          {(userDetails?.name)
            ?.split(" ")
            ?.map((item:string) => item?.slice(0, 1))
            ?.join("") || "VP"}
        </div>
      ) : 
      (<img
        src={profileAvatar}
        alt="avatar"
        className={`rounded-full ${classnames}`}
      />
    ) }
      </Link>
    </>
  );
};
