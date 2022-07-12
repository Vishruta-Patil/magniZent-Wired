import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getAllAvatars, getAvatarProfile } from "services/authService";
import { useState } from "react";

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
  }, []);

  const { avatarList } = useAppSelector((store) => store.auth);
  const getUserAvatar = avatarList.some((user: any) => user?.id === id);

  return (
    <>
      {getUserAvatar ? (
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
