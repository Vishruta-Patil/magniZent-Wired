import { useAppDispatch } from "hooks";
import { useState, useEffect, useRef } from "react";
import { getSearchedValue, logoutUser } from "redux/slices/authSlice";
import { SearchSuggestions } from "./SearchSuggestions";

const SearchUser = ({classnames} : {classnames:string}) => {
  const [searchedValue, setSearchedValue] = useState("")
  const [isFocus, setIsFocus] = useState()
  const dispatch = useAppDispatch()

  const inputRef:any = useRef(null)

  // console.log(inputRef?.current.toFocus())

  return (  
    <div className="relative"> 
      <input
        ref={inputRef}
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
        ${classnames}
      `}
      value={searchedValue}
      onChange={(e) => setSearchedValue(e.target.value)}
      
      />
       <div onClick={() => dispatch(logoutUser())}></div> 
       {searchedValue && <SearchSuggestions searchedValue={searchedValue} inputRef={inputRef}/>}
      </div>
  );
};

export default SearchUser
