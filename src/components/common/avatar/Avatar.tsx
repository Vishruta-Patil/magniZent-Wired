import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getAvatarProfile } from "services/authService";
import { useState } from "react";

export const Avatar = ({
  classnames,
  profileAvatar,
}: {
  classnames: string;
  profileAvatar: any;
}) => {
  const { avatar, name } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAvatarProfile());
  }, []);

  //   const {allUsers} = useAppSelector((store) => store.auth)
  // let userDetails:any = allUsers.find(user => user?.id === item?.id)

  const { authToken } = useAppSelector((store) => store.auth);
  const { avatarList } = useAppSelector((store) => store.auth);
  const getUserAvatar = avatarList.some((user: any) => user?.id === authToken);
  const [isAvatar, setIsAvatar] = useState(false);

  useEffect(() => {
    if (getUserAvatar) {
      setIsAvatar(true);
    } else setIsAvatar(false);
  }, []);


  return (
    <>
      {profileAvatar ? (
        <img
          src={profileAvatar}
          alt="avatar"
          className={`rounded-full ${classnames}`}
        />
      ) : (
        <div className="h-14 w-14 rounded-full relative bg-blue-500 text-white-neutral flex items-center justify-center text-2xl">
          {name
            .split(" ")
            .map((item) => item.slice(0, 1))
            .join("") || "VP"}
        </div>
      )}
    </>
  );
};
