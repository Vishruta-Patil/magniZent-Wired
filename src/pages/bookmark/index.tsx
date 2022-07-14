import { MobileNav } from "components/common/mobileNav/MobileNav";
import Drawer from "components/Drawer";
import Header from "components/Header";
import UserSidebar from "components/UserSidebar";
import { BookMarkContent } from "./bookmarkContent";

export const Bookmark = () => {
    return (
              <div className="grid grid-cols-8 h-100">
                <div className="col-span-8">
                  <Header />
                </div>
                <div className="xs:hidden md:block col-span-2">
                  <Drawer />
                </div>
                <div className="relative xs:col-span-8 md:col-span-6 lg:col-span-4 border-l-2 border-r-2">
                  <BookMarkContent />
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