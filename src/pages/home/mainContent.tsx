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
    dispatch(getAllUsers());
  }, []); 

  useEffect(() => {
    setFollowing(userDetails?.following?.followingBy);
  }, []); 

  const followingId = following?.map((user: any) => user?.id);
  const userIdOfPosts = following && [...followingId, authToken];
  const postsOfFollowing =
    following &&
    allPosts.filter((post: any) => userIdOfPosts?.includes(post?.id));

  const [filteredPost, setFilteredPost] = useState(postsOfFollowing);

  useEffect(() => {
    setFollowing(userDetails?.following?.followingBy);
    setFilteredPost(postsOfFollowing);
  }, [allPosts, userDetails]);

  console.log(allPosts);

  return (
    <>
      <SearchUser classnames="md:hidden w-11/12 mx-auto block" />
      <CreatePost />
      {filteredPost?.map((item: any, index: number) => (
        <div>
          <PostCard item={item} key={index} />
        </div>
      ))}
    </>
  );
};
