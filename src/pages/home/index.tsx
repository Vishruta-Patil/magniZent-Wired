import CreatePost from "components/Post/CreatePost";
import Drawer from "components/Drawer";
import Footer from "components/Footer";
import Header from "components/Header";
import UserSidebar from "components/UserSidebar";
import PostCard from "components/Post/PostCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks";
import { Userprofile } from "components/Profile/UserProfile";
import { UpdateProfileModal } from "components/Profile/UpdateProfileModal";
import { getAllUsers } from "services/authService";
import SearchUser from "components/common/search/SearchUser";

const Home = () => {
  const navigate = useNavigate()
  const {authToken, userId, allUsers} = useAppSelector(store => store.auth)
  const dispatch = useAppDispatch()

  const menuData = ["home", "explore", "bookmark", "notifications", "person"]

  useEffect(() => {
    if (!localStorage.getItem('authToken')) {
      navigate('/login')
    }
  }, [authToken])

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
  
  return (
    <div className="grid grid-cols-8 h-100">
      <h1 className="col-span-8">
        <Header />
      </h1>
      <div className="xs:hidden md:block col-span-2">
        <Drawer />
      </div>
      <div className="relative xs:col-span-8 md:col-span-6 lg:col-span-4 border-l-2 border-r-2">
        <SearchUser classnames="md:hidden w-11/12 mx-auto block"/>
        <CreatePost />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className="hidden lg:block col-span-2">
        <UserSidebar />
      </div>
      {/* <div className="col-span-8 p-3 bg-green-100">
        <Footer />
      </div> */}

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-200 py-1 flex justify-around text-primary-color">
        {menuData.map(icon => (
          <span className="material-icons text-3xl">{icon}</span>
        ))}
        
      </div>
    </div>
  );
};

export default Home;
