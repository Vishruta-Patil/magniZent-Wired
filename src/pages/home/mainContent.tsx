import SearchUser from "components/common/search/SearchUser";
import CreatePost from "components/Post/CreatePost";
import PostCard from "components/Post/PostCard";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { getAllUsers } from "services/authService";
import { getAllPosts } from "services/postsServices";
import { Tab } from "@headlessui/react";
import { SearchSuggestions } from "components/common/search/SearchSuggestions";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const MainContent = () => {
   const authToken = localStorage.getItem("authToken");
  const dispatch = useAppDispatch();
  const { allPosts } = useAppSelector((store) => store.posts);
  const { allUsers } = useAppSelector((store) => store.auth);

  const categories: string[] = ["Latest", "Oldest", "Trending"];
 
  const userDetails: any = allUsers.find((user) => user?.id === authToken);
  const [following, setFollowing] = useState(
    userDetails?.following?.followingBy
  );

  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(getAllUsers());
    setFollowing(userDetails?.following?.followingBy);
  }, []);

  const followingId = following?.map((user: any) => user?.id);
  const userIdOfPosts = following && [...followingId, authToken];
  const postsOfFollowing =
    following &&
    allPosts.filter((post: any) => userIdOfPosts?.includes(post?.id));

  const [filteredPost, setFilteredPost] = useState(postsOfFollowing);

  const postsByLiked =
    filteredPost &&
    [...filteredPost]?.sort(
      (a: any, b: any) => b?.likes?.likeCount - a?.likes?.likeCount
    );

  const [trendingPosts, setTrendingPosts] = useState(postsByLiked);

  useEffect(() => {
    setFollowing(userDetails?.following?.followingBy);   
  }, [following, allUsers]);

  useEffect(() => {
    setFilteredPost(postsOfFollowing);
  }, [following, allUsers, allPosts])

  useEffect(() => {
    filteredPost &&
      setTrendingPosts(
        [...filteredPost]?.sort(
          (a: any, b: any) => b?.likes?.likeCount - a?.likes?.likeCount
        )
      );
  }, [filteredPost, allPosts, allUsers]);



  return (
    <>
      <SearchUser classnames="md:hidden w-11/12 mx-auto block" />
      <CreatePost />
      <div className="mx-7">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-primary-color py-1 mb-1 dark:bg-dark-highlight-color">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-xl font-medium leading-5 text-primary-color",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow dark:bg-primary-color dark:text-white-neutral dark:font-bold"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-9">
            <Tab.Panel>
              {filteredPost?.length > 0 ? (
                filteredPost?.map((item: any, index: number) => (
                  <div>
                    <PostCard item={item} key={index} />
                  </div>
                ))
              ) : (
                <h1 className="text-secondary-color font-semibold text-xl">
                  Looks like you don't follow anyone,{" "}
                  <span className="text-primary-color">FOLLOW NOW</span> to get
                  updated
                </h1>
              )}
            </Tab.Panel>

            <Tab.Panel>
              {filteredPost?.length > 0 ? (
                [...filteredPost]?.reverse()?.map((item: any, index: number) => (
                  <div>
                    <PostCard item={item} key={index} />
                  </div>
                ))
              ) : (
                <h1 className="text-secondary-color font-semibold text-xl">
                  Looks like you don't follow anyone,{" "}
                  <span className="text-primary-color">FOLLOW NOW</span> to get
                  updated
                </h1>
              )}
            </Tab.Panel>

            <Tab.Panel>
              {trendingPosts?.length > 0 ? (
                trendingPosts?.map((item: any, index: number) => (
                  <div>
                    <PostCard item={item} key={index} />
                  </div>
                ))
              ) : (
                <h1 className="text-secondary-color font-semibold text-xl">
                  Looks like you don't follow anyone,{" "}
                  <span className="text-primary-color">FOLLOW NOW</span> to get
                  updated
                </h1>
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* <SearchSuggestions /> */}
    </>
  );
};
