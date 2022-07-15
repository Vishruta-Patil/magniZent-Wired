import { MobileNav } from "components/common/mobileNav/MobileNav";
import Drawer from "components/Drawer";
import Header from "components/Header";
import UserSidebar from "components/UserSidebar";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { getAllUsers } from "services/authService";
import { ConnectionContent } from "./ConnectionContent";
import { ConnectionTab } from "./ConnectionTab";

export const Connections = () => {
  const dispatch = useAppDispatch()
  const { allUsers, authToken } = useAppSelector(
    (store) => store.auth
  );

  let userDetails: any = allUsers.find((user) => user?.id === authToken);

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
    
  return (
    <div className="grid  h-100 grid-cols-12">
      <div className="col-span-12">
        <Header />
      </div>
      <div className="xs:hidden md:block  col-span-1 relative">
        <Drawer />
      </div>
      <div className="relative lg:col-span-8 border-l-2 border-r-2 col-span-12 md:col-span-7">
        <ConnectionContent />
        <ConnectionTab />
      </div>
      <div className="xs:hidden md:block block lg:col-span-3 md:col-span-4">
        <UserSidebar />
      </div>
      <MobileNav />
    </div>
  );
};