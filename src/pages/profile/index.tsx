import React, { useEffect, useState } from "react";
import Header from "components/Header";
import Drawer from "components/Drawer";
import CreatePost from "components/Post/CreatePost";
import PostCard from "components/Post/PostCard";
import UserSidebar from "components/UserSidebar";

import { Userprofile } from "components/Profile/UserProfile";

export const Profile = () => {

  return (
    <div className="grid grid-cols-8">
      <h1 className="col-span-8">
        <Header />
      </h1>
      <div className="xs:hidden md:block col-span-2">
        <Drawer />
      </div>
      <div className="xs:col-span-8 md:col-span-6 lg:col-span-4 border-l-2 border-r-2">
        <Userprofile />
      </div>
      <div className="hidden lg:block col-span-2">
        <UserSidebar />
      </div>
    </div>
  );
};
