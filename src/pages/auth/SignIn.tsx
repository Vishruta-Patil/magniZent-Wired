import { HeroBtn } from "components";
import Header from "components/Header";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks";
import { signInUser } from "services/authService";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const { authToken } = useAppSelector((store) => store.auth);

  useEffect(() => {
    authToken &&
      navigate("/", { replace: true });
  }, [authToken]);

  return (
    <section>
      <Header />
      <div className="flex flex-col max-w-3xl mx-5 md:mx-auto mt-20 shadow-2xl bg-white-neutral">
        <h1 className="text-primary-color my-4 mb-2 text-3xl font-bold">
          REGISTER
        </h1>

        <p>Looks like you are new! Please fill in the information below.</p>

        <input
          className="m-3 mt-7 p-2 rounded-lg border-2"
          type="text"
          placeholder="Enter your name"
          value={credentials.name}
          onChange={(e) =>
            setCredentials({ ...credentials, name: e.target.value })
          }
        />
        <input
          className="m-3 p-2 rounded-lg border-2"
          type="email"
          placeholder="Enter your email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <input
          className="m-3 p-2 rounded-lg border-2"
          type="password"
          placeholder="Enter password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />

        <HeroBtn
          classnames="m-3 mt-9 mb-5 font-bold p-2"
          eventHandler={() => dispatch(signInUser(credentials, dispatch))}
        >
          Sign In
        </HeroBtn>

        <p className="mb-5">
          Already have an account?{" "}
          <Link to="/login" className="text-primary-color">
            Log In!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
