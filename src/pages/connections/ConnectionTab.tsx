import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { useAppSelector } from "hooks";
import { UserCard } from "components/UserSidebar/UserCard";
import { userDetailsType } from "types/auth.types";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const ConnectionTab = () => {
  const categories: string[] = ["Explore", "Follower", "Following"];
  const { allUsers } = useAppSelector((store) => store.auth);

  const authToken = localStorage.getItem("authToken");

  let userDetails: userDetailsType | undefined = allUsers.find(
    (user) => user?.id === authToken
  );
  const [followers, setFollowers] = useState(userDetails?.follower?.followerId);
  const [following, setFollowing] = useState(
    userDetails?.following?.followingId
  );

  const getFollowingUsers =
    following &&
    allUsers.filter((item: userDetailsType) => following.includes(item?.id));

  const getFollowerUsers =
    followers &&
    allUsers.filter((item: userDetailsType) => followers.includes(item?.id));

  const [followingUsers, setFollowingUsers] = useState(getFollowingUsers);

  const exploreList =
    allUsers.filter(
      (user: userDetailsType) => !followingUsers?.includes(user?.id)
    ) ?? [];

  const [explore, setExplore] = useState(exploreList);

  useEffect(() => {
    setFollowers(userDetails?.follower?.followerId);
    setFollowing(userDetails?.following?.followingId);
    setExplore(exploreList);
  }, [allUsers]);

  useEffect(() => {
    setFollowingUsers(getFollowingUsers);
  }, [following]);

  useEffect(() => {
    setExplore(exploreList);
  }, [following]);

  return (
    <div className="p-7 mt-9 lg:m-16 md:m-8 m-3">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-primary-color p-1 dark:bg-dark-highlight-color">
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
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3 dark:bg-dark-highlight-color",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            {explore === undefined || explore.length === 0 ? (
              <h2 className="text-primary-color font-semibold text-xl">
                No users are available in explore section
              </h2>
            ) : (
              explore?.map((item: userDetailsType, index: number) => (
                <UserCard item={item} key={index} />
              ))
            )}
          </Tab.Panel>

          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3 dark:bg-dark-highlight-color",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            {followers === undefined || followers.length === 0 ? (
              <h2 className="text-primary-color font-semibold text-xl">
                No followers
              </h2>
            ) : (
              getFollowerUsers?.map((item: userDetailsType, index: number) => (
                <UserCard item={item} key={index} />
              ))
            )}
          </Tab.Panel>

          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3 dark:bg-dark-highlight-color",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            {followingUsers === undefined || followingUsers.length === 0 ? (
              <h2 className="text-primary-color font-semibold text-xl">
                You are not following any user
              </h2>
            ) : (
              followingUsers?.map(
                (item: userDetailsType | undefined | null, index: number) => (
                  <UserCard item={item} key={index} />
                )
              )
            )}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
