import { Avatar } from "components/common/avatar/Avatar";
import { HeroBtn } from "components/common/button/HeroBtn";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getAllAvatars, getAllUsers, getAvatarFromData } from "services/authService";
import {useState} from "react"
import { addFollowing, removeFollowing } from "services/userService";
import { getAllPosts } from "services/postsServices";
import { Link } from "react-router-dom";
import { useFollowStatus } from "hooks/useFollowStatus";

export const UserCard = ({ item }: any) => {
    const {followHandler, unFollowHandler, followStatus} = useFollowStatus(item)

    return (
      
      <div className="flex justify-between items-center mb-6">
        <Link to={`/profile/${item?.id}`}>
        <div className="flex items-center space-x-3">
          <Avatar
            classnames="lg:h-12 lg:w-12 h-9 w-9"
            profileAvatar={item?.avatarUrl}
            id={item?.id}
          />
          {/* <img src={item?.avatarUrl} /> */}
          <div className="flex-col flex-wrap">
            <p className="text-black text-base font-semibold text-left dark:text-white-neutral">{item?.name}</p>
            <p className="text-secondary-color text-sm text-left">
              @{item?.username}
            </p>
          </div>
        </div>
        </Link>
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