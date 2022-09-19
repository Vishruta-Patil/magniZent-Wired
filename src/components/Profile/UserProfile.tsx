import { HeroBtn } from "components/common/button/HeroBtn";
import { OutlineBtn } from "components/common/button/OutlineBtn";
import { useState, useEffect } from "react";
import { UpdateProfileModal } from "./UpdateProfileModal";
import { logoutUser } from "redux/slices/authSlice";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks";
import {
  getAllUsers,
  getAvatarProfile,
  uploadAvatarProfile,
} from "services/authService";
import { userDetailsType } from "types/auth.types";
import { Avatar } from "components/common/avatar/Avatar";
import { UserPosts } from "pages/profile/userPosts";
import { useFollowStatus } from "hooks/useFollowStatus";

export const Userprofile = () => {
  const [userProfileModal, setUserProfileModal] = useState(false);

  const dispatch = useAppDispatch();
  const params = useParams();
  const { profileId } = params;
  const { allUsers, authToken } = useAppSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [userProfileModal]);

  useEffect(() => {
    dispatch(getAvatarProfile());
  }, [userProfileModal]);

  const data = allUsers.find(
    (item: userDetailsType) => item["id"] === profileId
  );

  const { followHandler, unFollowHandler, followStatus } =
    useFollowStatus(data);

  return (
    <div>
      <section className="p-7 mt-9 lg:m-16 m-8 relative bg-white-neutral shadow-lg space-x-3 dark:bg-dark-highlight-color">
        <div className="flex flex-col justify-center items-center md:items-start md:flex-row">
          <Avatar
            classnames="md:h-24 md:w-24 h-28 md:m-0 m-5 w-28"
            profileAvatar={data?.avatarUrl}
            id={authToken}
          />
          <div className="flex flex-col justify-center items-center md:block ml-5 text-left text-secondary-color">
            <div className="flex gap-4 items-center md:block">
              <p className="text-2xl text-primary-color font-semibold  mb-1">
                {data?.name}
              </p>
              {data?.id === authToken && (
                <span
                  className="material-icons block cursor-pointer md:hidden"
                  onClick={() => setUserProfileModal(!userProfileModal)}
                >
                  edit
                </span>
              )}
            </div>
            <p className="text-lg mb-1">@{data?.username}</p>
            {data?.bio && <p className="mb-1 text-lg">{data?.bio}</p>}
            {data?.website && <p className="mb-1 text-lg">{data?.website}</p>}

            <div className="flex gap-6 mt-7 font-semibold">
              <p>2 Posts</p>
              <p>10 Followers</p>
              <p>15 Following</p>
            </div>
            {data?.id === authToken && (
              <HeroBtn
                classnames="w-11/12 mt-3"
                eventHandler={() => dispatch(logoutUser())}
              >
                Logout
              </HeroBtn>
            )}
          </div>
          {data?.id === authToken ? (
            <OutlineBtn
              classnames="hidden ml-auto text-base px-1 md:block dark:bg-dark-drawer-color"
              eventHandler={() => setUserProfileModal(!userProfileModal)}
            >
              Edit Profile
            </OutlineBtn>
          ) : (followStatus ? (
            <OutlineBtn
              classnames="hidden ml-auto text-base px-1 md:block dark:bg-dark-drawer-color"
              eventHandler={unFollowHandler}
            >
              Unfollow
            </OutlineBtn>
          ) : (
            <OutlineBtn
              classnames="hidden ml-auto text-base px-1 md:block dark:bg-dark-drawer-color"
              eventHandler={followHandler}
            >
              Follow
            </OutlineBtn>
          ))}
        </div>
      </section>

      <UpdateProfileModal
        userProfileModal={userProfileModal}
        setUserProfileModal={setUserProfileModal}
        data={data}
      />

      <UserPosts />
    </div>
  );
};
