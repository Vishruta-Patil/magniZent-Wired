import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getAllAvatars, getAllUsers, getAvatarProfile } from "services/authService";
import { Link } from "react-router-dom";

export const Avatar = ({
  classnames,
  profileAvatar,
  id
}: {
  classnames: string;
  profileAvatar: any;
  id?:string
}) => {
  const { avatar, name } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAvatarProfile());
    dispatch(getAllAvatars())
    dispatch(getAllUsers())
  }, []);

  const { avatarList, allUsers } = useAppSelector((store) => store.auth);
  const getUserAvatar = avatarList.find((user: any) => user?.id === id);
  let userDetails: any = allUsers.find((user) => user?.id === id);
  
  return (
    <>
    <Link to={`/profile/${id}`}>
      {profileAvatar == "" ? (
        <div className={`h-14 w-14 rounded-full relative bg-blue-500 text-white-neutral flex items-center justify-center text-2xl ${classnames}`}>
          {(userDetails?.name)
            ?.split(" ")
            ?.map((item:any) => item?.slice(0, 1))
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
