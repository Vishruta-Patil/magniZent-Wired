import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getAllUsers } from "services/authService";
import { useState } from "react";
import { addFollowing, removeFollowing } from "services/userService";
import { getAllPosts } from "services/postsServices";

export const useFollowStatus = (item: any) => {
  const { allUsers, authToken } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  const userId = item?.id;
  let authItem: any = allUsers.find((user) => user?.id === authToken);

  const isFollowed: any = authItem?.following?.followingId?.some(
    (id: string) => id === item.id
  );
  const [followStatus, setFollowStatus] = useState(isFollowed);

  const followHandler = () => {
    dispatch(addFollowing({ userId, item, authToken, authItem }));
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  };

  const unFollowHandler = () => {
    dispatch(removeFollowing({ userId, item, authToken, authItem }));
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  };

  useEffect(() => {
    setFollowStatus(isFollowed);
  }, [userId, authItem]);

  return { followStatus, followHandler, unFollowHandler };
};
