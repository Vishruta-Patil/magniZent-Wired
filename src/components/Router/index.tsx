import Login from "pages/auth/login";
import SignIn from "pages/auth/SignIn";
import Home from "pages/home";
import { NotFoundPage } from "pages/notFound";
import { Profile } from "pages/profile";
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
    </Routes>
  );
};

export default Router;
