import CreatePost from "components/Post/CreatePost";
import Drawer from "components/Drawer";
import Footer from "components/Footer";
import Header from "components/Header";
import UserSidebar from "components/UserSidebar";
import PostCard from "components/Post/PostCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('authToken')) {
      navigate('/login')
    }
  }, [])
  
  return (
    <div className="grid grid-cols-8">
      <h1 className="col-span-8">
        <Header />
      </h1>
      <div className="xs:hidden md:block col-span-2">
        <Drawer />
      </div>
      <div className="xs:col-span-8 md:col-span-6 lg:col-span-4 border-l-2 border-r-2">
        <CreatePost />
        <PostCard />
      </div>
      <div className="hidden lg:block col-span-2">
        <UserSidebar />
      </div>
      {/* <div className="col-span-8 p-3 bg-green-100">
        <Footer />
      </div> */}
    </div>
  );
};

export default Home;
