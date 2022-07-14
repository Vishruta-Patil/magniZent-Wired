import Login from "pages/auth/login";
import SignIn from "pages/auth/SignIn";
import { Bookmark } from "pages/bookmark";
import { Connections } from "pages/connections";
import Home from "pages/home";
import { NotFoundPage } from "pages/notFound";
import { Profile } from "pages/profile";
import { SinglePost } from "pages/singlePost";
import { Route, Routes, Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />

      <Route
        path="/profile/:profileId"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />

      <Route
        path="/bookmark"
        element={
          <PrivateRoute>
            <Bookmark />
          </PrivateRoute>
        }
      />

<Route
        path="/connections"
        element={
          <PrivateRoute>
            <Connections />
          </PrivateRoute>
        }
      />
    
    <Route
        path="/posts/:postId"
        element={
          <PrivateRoute>
            <SinglePost />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Router;
