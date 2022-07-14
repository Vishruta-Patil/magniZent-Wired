import React, { useEffect, useState } from "react";
import Header from "components/Header";
import Drawer from "components/Drawer";
import CreatePost from "components/Post/CreatePost";
import PostCard from "components/Post/PostCard";
import UserSidebar from "components/UserSidebar";

import { Userprofile } from "components/Profile/UserProfile";
import { MobileNav } from "components/common/mobileNav/MobileNav";

export const Profile = () => {
  return (
    <div className="grid  h-100 grid-cols-12">
      <div className="col-span-12">
        <Header />
      </div>
      <div className="xs:hidden md:block  col-span-1 relative">
        <Drawer />
      </div>
      <div className="relative lg:col-span-8 border-l-2 border-r-2 col-span-12 md:col-span-7">
        <Userprofile />
      </div>
      <div className="xs:hidden md:block block lg:col-span-3 md:col-span-4">
        <UserSidebar />
      </div>
      <MobileNav />
    </div>
  );
};
