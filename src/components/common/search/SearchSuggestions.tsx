import { UserCard } from "components/UserSidebar/UserCard";
import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";

export const SearchSuggestions = ({searchedValue, inputRef}:any) => {
  const {  allUsers } = useAppSelector((store) => store.auth);

  const data: any =
  searchedValue === ""
      ? []
      : allUsers.filter((user) =>
          user?.name.toLowerCase().includes(searchedValue.toLowerCase()) || user?.username.toLowerCase().includes(searchedValue.toLowerCase())
        );
  const [searchFilteredData, setSearchFilteredData] = useState(data);

  console.log(searchedValue)

  useEffect(() => {
    if (searchedValue === "") {
      setSearchFilteredData([]);
    } else {
      setSearchFilteredData(data);
    }
  }, [searchedValue]);

  

  console.log(searchFilteredData);

  return (
    <div className="bg-white shadow-lg p-5 w-9/12 absolute top-20  z-50 left-1/2 transform -translate-x-1/2 ">
      {searchFilteredData?.length > 0 ? (
        searchFilteredData?.map((item: number, index: any) => (
          <UserCard item={item} />
        ))
      ) : searchedValue === "" ? <h1>Search Now</h1> : (
        <h1>No Users Found</h1>
      )}
    </div>
  );
};
