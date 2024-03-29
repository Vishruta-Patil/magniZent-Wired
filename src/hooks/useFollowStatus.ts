import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getAllUsers } from "services/authService";
import { useState } from "react";
import { addFollowing, removeFollowing } from "services/userService";
import { getAllPosts } from "services/postsServices";
import { userDetailsType } from "types/auth.types";

export const useFollowStatus = (item:userDetailsType) => {
  const { allUsers, authToken } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  const userId = item?.id;
  let authItem:userDetailsType|undefined = allUsers.find((user) => user?.id === authToken);

  const isFollowed:userDetailsType = authItem?.following?.followingId?.some(
    (id: string) => id === item?.id
  );
  const [followStatus, setFollowStatus] = useState(isFollowed);

 
  const totalFollowing = authItem?.following ? authItem?.following?.followingBy?.length : 0
  const [noOfFollowing, setNoOfFollowing] = useState(totalFollowing)

  const totalFollower = authItem?.follower ? authItem?.follower?.followedBy?.length : 0
  const [noOfFollower, setNoOfFollower] = useState(totalFollower)

  const followHandler = () => {
    dispatch(addFollowing({ userId, item, authToken, authItem }));
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  };

  const unFollowHandler = () => {
    authItem && userId && dispatch(removeFollowing({ userId, item, authToken, authItem }));
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  };

  useEffect(() => {
    setFollowStatus(isFollowed);
    setNoOfFollowing(totalFollowing)
    setNoOfFollower(totalFollower)
  }, [userId, authItem]);

  return { followStatus, followHandler, unFollowHandler, noOfFollowing, noOfFollower };
};
