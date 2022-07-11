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
import { MainContent } from "./mainContent";
import { MobileNav } from "components/common/mobileNav/MobileNav";


const Home = () => {
  const navigate = useNavigate();
  const { authToken } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

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

      <MobileNav />
    </div>
  );
};

export default Home;
