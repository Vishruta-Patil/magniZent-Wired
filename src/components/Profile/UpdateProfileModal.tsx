import { Avatar } from "components/common/avatar/Avatar";
import { HeroBtn } from "components/common/button/HeroBtn";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { getAllUsers, getAvatarFromData, getAvatarProfile, updateUser, uploadAvatarProfile } from "services/authService";
import { userDetailsType } from "types/auth.types";

type updateProfileType = {
  userProfileModal: boolean;
  setUserProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: userDetailsType | undefined;
};

export const UpdateProfileModal = ({
  userProfileModal,
  setUserProfileModal,
  data,
}: updateProfileType) => {
  const [updatedData, setUpdatedData] = useState<any>({
    name: data?.name ?? "",
    username: data?.username ?? "",
    bio: data?.bio ?? "",
    website: data?.website ?? "",
  });

  const [avatarProfile, setAvatarProfile] = useState<File | null>(null);

  const { avatar, authToken, allUsers } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  const clickHandler = (event: any) => {
    const fileElement = (event.target as HTMLInputElement).files;
    setAvatarProfile(fileElement ? fileElement[0] : null);
  };

  useEffect(() => {dispatch(getAvatarProfile())}, [userProfileModal])

  let userDetails: any = allUsers.find((user) => user?.id === authToken);

  return (
    <section
      className={`${
        userProfileModal ? "block" : "hidden"
      } p-7 max-w-md bg-slate-200 shadow-lg absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
    >
      <div className="flex">
        <h1 className="font-bold text-xl mb-7 text-center">Edit Profile</h1>
        <span
          className="material-icons text-3xl ml-auto cursor-pointer"
          onClick={() => setUserProfileModal(false)}
        >
          close
        </span>
      </div>
      <div className="flex mb-5  items-center">
        <label className="inline-block w-24">Avatar</label>
        <div className="relative ">
          {avatarProfile ? (
            <img
              src={URL.createObjectURL(avatarProfile)}
              alt="avatar"
              className="h-14 w-14 rounded-full relative bg-blue-500 text-white-neutral"
            />
          ) : (
            <Avatar classnames="h-14 w-14" profileAvatar={userDetails?.avatarUrl} id={authToken}/>
          )}
          <span className="material-icons text-lg ml-auto absolute bottom-0 right-0 cursor-pointer">
            add_a_photo
          </span>
          <input
            type="file"
            accept="image/*"
            className="w-5 h-5 opacity-0 absolute bottom-0 right-0 cursor-pointer bg-blue-700"
            onChange={clickHandler}
          />
        </div>
      </div>
      <div className="flex mb-5">
        <label className="inline-block w-24">Name</label>
        <input
          type="text"
          className="border-secondary-color border-2 rounded bg-transparent p-1"
          value={updatedData?.name}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, name: e.target.value })
          }
        />
      </div>
      <div className="flex mb-5">
        <label className="inline-block w-24">Username</label>
        <input
          type="text"
          className="border-secondary-color border-2 rounded bg-transparent p-1"
          value={updatedData?.username}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, username: e.target.value })
          }
        />
      </div>
      <div className="flex mb-5">
        <label className="inline-block w-24 ">Bio</label>
        <input
          type="text"
          className="border-secondary-color border-2 rounded bg-transparent p-1"
          value={updatedData?.bio}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, bio: e.target.value })
          }
        />
      </div>
      <div className="flex mb-5">
        <label className="inline-block w-24">Website</label>
        <input
          type="text"
          className="border-secondary-color border-2 rounded bg-transparent p-1"
          value={updatedData?.website}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, website: e.target.value })
          }
        />
      </div>

      <HeroBtn
        classnames="w-11/12 mt-5"
        eventHandler={() => {
          dispatch(updateUser(updatedData));
          avatarProfile !== null && dispatch(uploadAvatarProfile(avatarProfile));
          dispatch(getAvatarProfile())
          dispatch(getAllUsers())
          setUserProfileModal(false);
         dispatch(getAvatarFromData())
        }}
      >
        Update
      </HeroBtn>
    </section>
  );
};

// For Reference
// Center Div : absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
