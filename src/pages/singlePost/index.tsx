import Header from "components/Header";
import Drawer from "components/Drawer";
import UserSidebar from "components/UserSidebar";

import { Userprofile } from "components/Profile/UserProfile";
import { MobileNav } from "components/common/mobileNav/MobileNav";
import { SinglePageContent } from "./SinglePageContent";

export const SinglePost = () => {
    return (
        <div className="grid  h-100 grid-cols-12">
        <div className="col-span-12">
          <Header />
        </div>
        <div className="xs:hidden md:block  col-span-1 relative h-screen">
          <Drawer />
        </div>
        <div className="relative lg:col-span-8 border-l-2 border-r-2 col-span-12 md:col-span-7">
          <SinglePageContent />
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
    )
}