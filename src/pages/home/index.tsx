import Drawer from "components/Drawer";
import Footer from "components/Footer";
import Header from "components/Header";
import UserSidebar from "components/UserSidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks";
import {
  getAllAvatars,
  getAllUsers,
  getAvatarProfile,
} from "services/authService";

import { getAllPosts } from "services/postsServices";
import { Avatar } from "components/common/avatar/Avatar";
import { HeroBtn } from "components";
import { MainContent } from "./mainContent";


const Home = () => {
  const navigate = useNavigate();
  const { authToken, userId, allUsers } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  const menuData = ["home", "explore", "bookmark", "notifications", "person"];

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }
  }, [authToken]);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAvatarProfile());
    dispatch(getAllPosts());
    dispatch(getAllAvatars());
  }, []);
  
  const { avatarList } = useAppSelector((store) => store.auth)
  // console.log(avatarList);

  return (
    <div className="grid grid-cols-8 h-100">
      <div className="col-span-8">
        <Header />
      </div>
      <div className="xs:hidden md:block col-span-2">
        <Drawer />
      </div>
      <div className="relative xs:col-span-8 md:col-span-6 lg:col-span-4 border-l-2 border-r-2">
        <MainContent />
      </div>
      <div className="hidden lg:block col-span-2">
        <UserSidebar />
      </div>

      {/* TODO: For future reference */}
      {/* <div className="col-span-8 p-3 bg-green-100">
        <Footer />
      </div> */}

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-200 py-1 flex justify-around text-primary-color">
        {menuData.map((icon, index) => (
          <span className="material-icons text-3xl" key={index}>{icon}</span>
        ))}
      </div>
    </div>
  );
};

export default Home;
