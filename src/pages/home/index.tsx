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
import { getBookmark } from "services/userService";


const Home = () => {
  const navigate = useNavigate();
  const { authToken, allUsers } = useAppSelector((store) => store.auth);
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
    dispatch(getBookmark())
  }, []);

  return (
    <div className="grid  h-100 grid-cols-12">
      <div className="col-span-12">
        <Header />
      </div>
      <div className="xs:hidden md:block  col-span-1 relative">
        <Drawer />
      </div>
      <div className="relative lg:col-span-8 border-l-2 border-r-2 col-span-12 md:col-span-7">
        <MainContent />
      </div>
      <div className="xs:hidden md:block block lg:col-span-3 md:col-span-4">
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
