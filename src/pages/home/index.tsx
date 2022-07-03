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

const Home = () => {
  const navigate = useNavigate()
  const {authToken, userId, allUsers} = useAppSelector(store => store.auth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!localStorage.getItem('authToken')) {
      navigate('/login')
    }
  }, [authToken])

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  console.log({userId}, {allUsers})
  
  return (
    <div className="grid grid-cols-8 h-100">
      <h1 className="col-span-8">
        <Header />
      </h1>
      <div className="xs:hidden md:block col-span-2">
        <Drawer />
      </div>
      <div className="relative xs:col-span-8 md:col-span-6 lg:col-span-4 border-l-2 border-r-2">
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
