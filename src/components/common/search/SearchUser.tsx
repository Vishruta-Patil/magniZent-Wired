import { useAppDispatch } from "hooks";
import { useState } from "react";
import { getSearchedValue, logoutUser } from "redux/slices/authSlice";
import { SearchSuggestions } from "./SearchSuggestions";

const SearchUser = ({classnames} : {classnames:string}) => {
  const [searchedValue, setSearchedValue] = useState("")
  const dispatch = useAppDispatch()

  return (  
    <div className="relative"> 
      <input
        placeholder="Search User"
        className={`
      bg-secondary-pale
        px-3
        py-1.5
        text-base
        text-secondary-color 
        rounded
        m-5
        focus:outline-none
        dark:bg-dark-highlight-color
        dark:outline
        dark: outline-1
        dark:outline-secondary-color
        dark:text-white-neutral
        ${classnames}
      `}
      value={searchedValue}
      onChange={(e) => setSearchedValue(e.target.value)}
      
      />
       <div onClick={() => dispatch(logoutUser())}></div> 
       {searchedValue && <SearchSuggestions searchedValue={searchedValue} />}
      </div>
  );
};

export default SearchUser
