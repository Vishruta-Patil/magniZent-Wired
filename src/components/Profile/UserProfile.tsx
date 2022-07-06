import avatar from "assets/avatar.png";
import { HeroBtn } from "components/common/button/HeroBtn";
import { OutlineBtn } from "components/common/button/OutlineBtn";
import { useState, useEffect } from "react";
import { UpdateProfileModal } from "./UpdateProfileModal";
import { logoutUser } from "redux/slices/authSlice";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks";
import { getAllUsers, uploadAvatarProfile } from "services/authService";
import { userDetailsType } from "types/auth.types";
import { Avatar } from "components/common/avatar/Avatar";

export const Userprofile = () => {
  const [userProfileModal, setUserProfileModal] = useState(false)

  const dispatch = useAppDispatch();
  const params = useParams();
  const { profileId } = params;
  const { allUsers } = useAppSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getAllUsers());
    // dispatch(uploadAvatarProfile());
  }, [userProfileModal]);

  const data = allUsers.find((item: userDetailsType) => item["id"] === profileId);

  return (
    <div>
    <section className="p-7 mt-9 m-4 relative bg-white-neutral shadow-lg space-x-3">
      <div className="flex flex-col justify-center items-center md:items-start md:flex-row">
        <Avatar classnames="md:h-24 md:w-24 h-28 md:m-0 m-5 w-28"/>
          <div className="flex flex-col justify-center items-center md:block ml-5 text-left text-secondary-color">
            <div className="flex gap-4 items-center md:block">
            <p className="text-2xl text-primary-color font-semibold  mb-1">
              {data?.name}
            </p>
            <span className="material-icons block cursor-pointer md:hidden" onClick={() => setUserProfileModal(!userProfileModal)}>edit</span>
            </div>
            <p className="text-lg mb-1">@{data?.username}</p>
            {data?.bio && <p className="mb-1 text-lg">{data?.bio}</p>}
            {data?.website && <p className="mb-1 text-lg">{data?.website}</p>}

            <div className="flex gap-6 mt-7 font-semibold">
              <p>2 Posts</p>
              <p>10 Followers</p>
              <p>15 Following</p>
            </div>
            <HeroBtn classnames="w-11/12 mt-3" eventHandler={() => dispatch(logoutUser())}>Logout</HeroBtn>
            
          </div>
          <OutlineBtn classnames="hidden ml-auto text-base px-1 md:block" eventHandler={() => setUserProfileModal(!userProfileModal)}>Edit Profile</OutlineBtn>
        
      </div>  
    </section>

    <UpdateProfileModal userProfileModal={userProfileModal} setUserProfileModal={setUserProfileModal} data={data}/>
    </div>
  );
};
