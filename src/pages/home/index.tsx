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
import { MobileNav } from "components/common/mobileNav/MobileNav";
import { getBookmark } from "services/userService";
import { MainContent } from "./mainContent";

const Home = () => {
  const navigate = useNavigate();
  const { authToken } = useAppSelector((store) => store.auth);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }
  }, [authToken]);

  // background-color: var(--white-color);
  //   height: calc(100vh - 2rem);
  //   margin-bottom: 4rem;
  //   margin-top: 2rem;
  //   overflow-y: auto;
  //   position: -webkit-sticky;
  //   position: sticky;
  //   top: 0;

  return (
    <div className="grid h-100 grid-cols-12">
      <div className="col-span-12">
        <Header />
      </div>
      <div className="xs:hidden md:block col-span-1 sticky h-screen top-0">
        <Drawer />
      </div>
      <div className="relative lg:col-span-8 col-span-12 md:col-span-7 border-l-4 border-r-4 dark:border-overlay-color">
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
