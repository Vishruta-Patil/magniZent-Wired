const SearchUser = ({classnames} : {classnames:string}) => {
  return (   
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
        ${classnames}
      `}
      />
  
  );
};

export default SearchUser
