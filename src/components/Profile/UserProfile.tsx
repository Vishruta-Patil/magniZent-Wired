import avatar from "assets/avatar.png";
import { HeroBtn } from "components/common/button/HeroBtn";
import { OutlineBtn } from "components/common/button/OutlineBtn";
import { useState, useEffect } from "react";
import { UpdateProfileModal } from "./UpdateProfileModal";
import { logoutUser } from "redux/slices/authSlice";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks";
import { getAllUsers } from "services/authService";
import { userDetailsType } from "types/auth.types";

export const Userprofile = () => {
  const [userProfileModal, setUserProfileModal] = useState(false)

  const dispatch = useAppDispatch();
  const params = useParams();
  const { profileId } = params;
  const { allUsers } = useAppSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const data = allUsers.find((item: userDetailsType) => item["id"] === profileId);

  return (
    <div>
    <section className="p-7 m-9 mx-20 relative bg-white-neutral shadow-lg">
      <div className="flex items-start">
        <img src={avatar} alt="avatar" className="h-24 w-24 rounded-full" />
        
          <div className="ml-5 text-left text-secondary-color ">
            <p className="text-2xl text-primary-color font-semibold  mb-1">
              {data?.name}
            </p>
            <p className="text-lg mb-1">@{data?.username}</p>
            <p className="mb-1 text-lg">Solving problems through code</p>
            <p className="mb-1 text-lg">vishrutapatil.netlify.app</p>

            <div className="flex gap-6 mt-7 font-semibold">
              <p>2 Posts</p>
              <p>10 Followers</p>
              <p>15 Following</p>
            </div>
            <HeroBtn classnames="w-11/12 mt-3" eventHandler={() => dispatch(logoutUser())}>Logout</HeroBtn>
          </div>
          <OutlineBtn classnames="ml-auto text-lg" eventHandler={() => setUserProfileModal(!userProfileModal)}>Edit Profile</OutlineBtn>
        
      </div>  
    </section>

    <UpdateProfileModal userProfileModal={userProfileModal} setUserProfileModal={setUserProfileModal} data={data}/>
    </div>
  );
};
