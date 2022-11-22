import { UserCard } from "components/UserSidebar/UserCard";
import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { userDetailsType } from "types/auth.types";

export const SearchSuggestions = ({ searchedValue }: {searchedValue:string}) => {
  const { allUsers } = useAppSelector((store) => store.auth);
  const [searchFilteredData, setSearchFilteredData] = useState<any>([]);

  const data:userDetailsType[]|undefined =
    searchedValue === ""
      ? []
      : allUsers.filter(
          (user) =>
            user?.name.toLowerCase().includes(searchedValue.toLowerCase()) ||
            user?.username.toLowerCase().includes(searchedValue.toLowerCase())
        ); 

  useEffect(() => {
    let timer;
    if (searchedValue) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        setSearchFilteredData(data)
      }, 300)
    } else {
      setSearchFilteredData([]);
    }
  }, [searchedValue]);

  // ***Different Approach to do same***
  // const timerId = useRef()
  // useEffect(() => {
  //   clearTimeout(timerId.current);
  //   timerId.current = setTimeout(() => {
  //     if (searchedValue) setSearchFilteredData(data);
  //     else setSearchFilteredData([]);
  //   }, 300);
  //   return () => clearTimeout(timerId.current);
  // }, [searchedValue]);


  return (
    <div className="bg-white shadow-lg p-5 w-9/12 absolute top-20  z-50 left-1/2 transform -translate-x-1/2 dark:bg-dark-highlight-color">
      {searchFilteredData?.length > 0 ? (
        searchFilteredData?.map((item: userDetailsType|undefined|null, index: React.Key|null|undefined) => (
          <UserCard item={item} key={index}/>
        ))
      ) : searchedValue === "" ? (
        <h1>Search Now</h1>
      ) : (
        <h1 className="dark:text-white-neutral">No Users Found</h1>
      )}
    </div>
  );
};
