import PostCard from "components/Post/PostCard";
import { useAppSelector } from "hooks";
import { useParams } from "react-router-dom";
import { Tab } from "@headlessui/react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const UserPosts = () => {
  const { allPosts } = useAppSelector((store) => store.posts);
  const { allUsers } = useAppSelector((store) => store.auth);
  const params = useParams();
  const { profileId } = params;

  let userDetails: any = allUsers.find((user: any) => user?.id === profileId);

  const userPosts: any =
    allPosts.filter((post: any) => post.id === userDetails?.id) ?? [];

  const categories: string[] = ["Posts", "Likes"];

  const likedPosts = allPosts.filter((posts:any) => posts?.likes?.likedBy?.includes(profileId)) ?? []

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
              "rounded-xl bg-white p-3 dark:bg-dark-background-color",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            {userPosts.length > 0 ?  userPosts?.map((item: any, index: any) => (
              <div>
                <PostCard item={item} key={index} />
              </div>
            )) : <h2 className='text-primary-color font-semibold text-xl'>No Posts are available</h2>}
          </Tab.Panel>

          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3 dark:bg-dark-background-color",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            {likedPosts.length > 0 ?  likedPosts?.map((item: any, index: any) => (
              <div>
                <PostCard item={item} key={index} />
              </div>
            )) : <h2 className='text-primary-color font-semibold text-xl'>You have not liked any posts</h2>}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
