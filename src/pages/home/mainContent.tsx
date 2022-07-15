import SearchUser from "components/common/search/SearchUser";
import CreatePost from "components/Post/CreatePost";
import PostCard from "components/Post/PostCard";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { getAllUsers } from "services/authService";
import { getAllPosts } from "services/postsServices";

export const MainContent = () => {
  const dispatch = useAppDispatch();
  const { allPosts } = useAppSelector((store) => store.posts);
  const { allUsers } = useAppSelector((store) => store.auth);

  const authToken = localStorage.getItem("authToken");
  const userDetails: any = allUsers.find((user) => user?.id === authToken);
  const [following, setFollowing] = useState(
    userDetails?.following?.followingBy
  );

  useEffect(() => {
    dispatch(getAllPosts());
  }, [allPosts]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [following]);

  useEffect(() => {
    setFollowing(userDetails?.following?.followingBy);
  }, [allUsers]);

  const followingId = following && following.map((user: any) => user?.id);
  const userIdOfPosts = following && [...followingId, authToken];
  const postsOfFollowing =
    following &&
    allPosts.filter((post: any) => userIdOfPosts.includes(post?.id));

  return (
    <>
      <SearchUser classnames="md:hidden w-11/12 mx-auto block" />
      <CreatePost />
      {postsOfFollowing?.length === 0 || postsOfFollowing === undefined ? (
        <>
          <h1 className="text-secondary-color text-2xl">
            <span className="text-3xl font-semibold text-primary-color">No Posts</span>, <br/> Start following your friends now to get updates on your
            feed!
          </h1>
        </>
      ) : (
        postsOfFollowing?.map((item: any, index: number) => (
          <div>
            <PostCard item={item} key={index} />
          </div>
        ))
      )}
    </>
  );
};
