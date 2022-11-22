import Header from "components/Header";
import Drawer from "components/Drawer";
import UserSidebar from "components/UserSidebar";

import { Userprofile } from "components/Profile/UserProfile";
import { MobileNav } from "components/common/mobileNav/MobileNav";

export const Profile = () => {
  return (
    <div className="grid  h-100 grid-cols-12">
      <div className="col-span-12">
        <Header />
      </div>
      <div className="xs:hidden md:block  col-span-1 relative h-screen">
        <Drawer />
      </div>
      <div className="relative lg:col-span-8 col-span-12 md:col-span-7 border-l-4 border-r-4 dark:border-overlay-color">
        <Userprofile />
      </div>
      <div className="lg:col-span-3 md:col-span-4 hidden lg:block">
        <UserSidebar />
      </div>
      <MobileNav />
    </div>
  );
};
