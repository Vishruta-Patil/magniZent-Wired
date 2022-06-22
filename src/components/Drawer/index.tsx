const Drawer = () => {
  return (
    <div className="p-3 m-9 text-secondary-color">
      <div className="flex flex-col text-2xl">    
        <div className="flex space-x-3 items-center mb-7">
          <span className="material-icons text-3xl">home</span>
          <p>Home</p>
        </div>
        <div className="flex space-x-3 items-center mb-7">
          <span className="material-icons text-3xl">explore</span>
          <p>Explore</p>
        </div>
        <div className="flex space-x-3 items-center mb-7">
          <span className="material-icons text-3xl">bookmark</span>
          <p>Bookmark</p>
        </div>
        <div className="flex space-x-3 items-center mb-7">
          <span className="material-icons text-3xl">notifications</span>
          <p>Notification</p>
        </div>
        <div className="flex space-x-3 items-center mb-7">
          <span className="material-icons text-3xl">person</span>
          <p>Profile</p>
        </div>
      
      <button className="bg-primary-color px-4 py-1 text-lg  text-white-neutral rounded-md">Create New Post</button>
    </div>
    </div>
  );
};

export default Drawer;
