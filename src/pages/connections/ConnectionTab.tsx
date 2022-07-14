import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { useAppDispatch, useAppSelector } from 'hooks'
import { getAllUsers } from 'services/authService'
import { UserCard } from 'components/UserSidebar/UserCard'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export const ConnectionTab = () => {
    const categories:string[] = ["Explore", "Follower", "Following"]

    const dispatch = useAppDispatch()
  const { allUsers } = useAppSelector(
    (store) => store.auth
  );

  const authToken = localStorage.getItem("authToken")

  let userDetails: any = allUsers.find((user) => user?.id === authToken);
  const [followers, setFollowers] = useState(userDetails?.follower?.followedBy)
  const [following, setFollowing] = useState(userDetails?.following?.followingBy)

  const getFollowing = following && following.map((user:any) => user?.id)
  const followingList = following && [...getFollowing, authToken]
  const exploreList = following && allUsers.filter((user:any) => !followingList.includes(user?.id))
  
  const [explore, setExplore] = useState(exploreList)


  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  useEffect(() => {
    setFollowers(userDetails?.follower?.followedBy)
    setFollowing(userDetails?.following?.followingBy)
    setExplore(exploreList)
  }, [allUsers])

  return (
    <div className="p-7 mt-9 lg:m-16 md:m-8 m-3">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-primary-color p-1">
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-md font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
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
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              {explore?.map((item:any,index:number) => (
                <UserCard item={item} key={index}/>
              ))}
            </Tab.Panel>

            <Tab.Panel
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              {followers?.map((item:any,index:number) => (
                <UserCard item={item} key={index}/>
              ))}
            </Tab.Panel>

            <Tab.Panel
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              {following?.map((item:any,index:number) => (
                <UserCard item={item} key={index}/>
              ))}
            </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
