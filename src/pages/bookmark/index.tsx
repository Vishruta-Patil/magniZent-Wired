import { IntroCard } from "components/common/introductionCard/IntroCard";
import { MobileNav } from "components/common/mobileNav/MobileNav";
import Drawer from "components/Drawer";
import Header from "components/Header";
import UserSidebar from "components/UserSidebar";
import { BookMarkContent } from "./bookmarkContent";

export const Bookmark = () => {
  return (
    <div className="grid  h-100 grid-cols-12">
      <div className="col-span-12">
        <Header />
      </div>
      <div className="xs:hidden md:block col-span-1 sticky h-screen top-0">
        <Drawer />
      </div>
      <div className="relative lg:col-span-8 col-span-12 md:col-span-7 border-l-4 border-r-4 dark:border-overlay-color">
        <IntroCard header="Here are your bookmarks" description="Get all your bookmarked posts and you can revisit this posts whenever required"/>
        <BookMarkContent />
      </div>
      <div className="xs:hidden md:block block lg:col-span-3 md:col-span-4">
        <UserSidebar />
      </div>
      <MobileNav />
    </div>
  );
};
