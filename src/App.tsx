import './App.css';
import Router from 'components/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useBookmark } from 'hooks/useBookmark';
import { useEffect } from 'react';
import { getAllPosts } from 'services/postsServices';
import { getAllUsers } from 'services/authService';

function App() {
const dispatch = useAppDispatch()
const token = localStorage.getItem("authToken")
  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(getAllUsers())
  }, [token,dispatch])
  
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router />
    </div>
  );
}

export default App;
