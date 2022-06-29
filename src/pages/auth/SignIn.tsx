import { HeroBtn } from "components";
import { OutlineBtn } from "components/common/button/OutlineBtn";
import Header from "components/Header";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signiIn } from "services/authService";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signinUser = () => {
    const user = signiIn(email, password, navigate);
    console.log(user);
  };

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
        />
        <input
          className="m-3 p-2 rounded-lg border-2"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="m-3 p-2 rounded-lg border-2"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <HeroBtn
          classnames="m-3 mt-9 mb-5 font-bold p-2"
          eventHandler={signinUser}
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
