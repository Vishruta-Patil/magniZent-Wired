import { Avatar } from "components/common/avatar/Avatar";
import { HeroBtn } from "components/common/button/HeroBtn";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getAllUsers } from "services/authService";
import {useState} from "react"
import { addFollowing, removeFollowing } from "services/userService";

export const UserCard = ({ item }: any) => {
    const { avatarList, allUsers, authToken } = useAppSelector((store) => store.auth);
   
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(getAllUsers());
    }, []);
  
    let userDetails: any = allUsers.find((user) => user?.id === item.id);
    const getUserAvatar = avatarList.find(
      (user: any) => user?.id === userDetails?.id
    );

    const userId = item?.id
    let authItem: any = allUsers.find((user) => user?.id === authToken);

   const isFollowed = () => authItem?.following?.followingBy.some((user:any) => user.id === item.id)
   const [followStatus, setFollowStatus] = useState(isFollowed)

   const followHandler = () => {
    dispatch(addFollowing({userId, item, authToken, authItem}))
    setFollowStatus((prev:Boolean) => !prev)
}

const unFollowHandler = () => {
    dispatch(removeFollowing({userId, item, authToken, authItem}))
    setFollowStatus((prev:Boolean) => !prev)
} 


    return (
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <Avatar
            classnames="lg:h-12 lg:w-12 h-9 w-9"
            profileAvatar={getUserAvatar?.url}
            id={item?.id}
          />
          <div className="flex-col flex-wrap">
            <p className="text-black text-base font-semibold text-left">{item?.name}</p>
            <p className="text-secondary-color text-sm text-left">
              @{item?.username}
            </p>
          </div>
        </div>

    {followStatus ?
        <HeroBtn classnames="px- m-3 text-sm text-white-neutral rounded-full" eventHandler={unFollowHandler}>
          unfollow
        </HeroBtn> : 
        <HeroBtn classnames="px- m-3 text-sm text-white-neutral rounded-full" eventHandler={followHandler}>
        follow
      </HeroBtn>
}
      </div>
    );
  };