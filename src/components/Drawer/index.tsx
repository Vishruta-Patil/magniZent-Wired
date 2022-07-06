import { HeroBtn } from "components/common/button/HeroBtn";

const Drawer = () => {
  return (
    <div className="p-3 m-3 mt-9  lg:m-9 text-secondary-color">
      <div className="flex flex-col text-xl">    
        <div className="flex space-x-3 items-center mb-7 font-bold text-primary-color">
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
      
     <HeroBtn classnames="lg:w-3/4">Create New Post</HeroBtn>
    </div>
    </div>
  );
};

export default Drawer;
