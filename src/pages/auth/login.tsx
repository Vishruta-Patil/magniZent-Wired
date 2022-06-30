import { HeroBtn } from "components";
import { OutlineBtn } from "components/common/button/OutlineBtn";
import Header from "components/Header";
import { useAppDispatch, useAppSelector } from "hooks";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginInUser } from "services/authService";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { authStatus } = useAppSelector((store) => store.auth);

  const guestCredentials = {
    email: "johndoekar@gmail.com",
    password: "john123",
  };

  if (authStatus === "fulfilled") {
    navigate("/");
  }

  return (
    <section>
      <Header />
      <div className="flex flex-col max-w-3xl mx-5 md:mx-auto mt-20 shadow-2xl bg-white-neutral">
        <h1 className="text-primary-color mt-5 mb-2 text-3xl font-bold">
          LOGIN
        </h1>

        <input
          className="m-3 mx-5 p-2 rounded-lg border-2"
          type="email"
          placeholder="Enter your email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <input
          className="m-3 mx-5 p-2 rounded-lg border-2"
          type="password"
          placeholder="Enter password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />

        <HeroBtn
          classnames="m-3 mx-5 mt-9 font-semibold"
          eventHandler={() => dispatch(loginInUser(credentials))}
        >
          Login
        </HeroBtn>
        <OutlineBtn
          classnames="m-3 mx-5 mb-5 font-semibold"
          eventHandler={() => dispatch(loginInUser(guestCredentials))}
        >
          Login using credentials
        </OutlineBtn>
        <p className="mb-5">
          Don't have an account?{" "}
          <Link to="/signin" className="text-primary-color">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
