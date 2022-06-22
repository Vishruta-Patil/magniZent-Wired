import CreatePost from "components/CreatePost";
import Drawer from "components/Drawer";
import Footer from "components/Footer";
import Header from "components/Header";
import UserSidebar from "components/UserSidebar";

const Home = () => {
  return (
    <div className="grid grid-cols-8">
      <h1 className="col-span-8">
        <Header />
      </h1>
      <div className="col-span-2">
        <Drawer />
      </div>
      <div className="col-span-4 border-l-2 border-r-2">
        <CreatePost />
      </div>
      <div className="col-span-2">
        <UserSidebar />
      </div>
      {/* <div className="col-span-8 p-3 bg-green-100">
        <Footer />
      </div> */}
    </div>
  );
};

export default Home;
