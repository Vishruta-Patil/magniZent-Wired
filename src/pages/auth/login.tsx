import { HeroBtn } from "components"
import { OutlineBtn } from "components/common/button/OutlineBtn"
import Header from "components/Header"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <section>
        <Header/>
            <div className="flex flex-col max-w-3xl mx-5 md:mx-auto mt-20 shadow-2xl bg-white-neutral">
            <h1 className="text-primary-color mt-5 mb-2 text-3xl font-bold">LOGIN</h1>

            <input className="m-3 mx-5 p-2 rounded-lg border-2" type="email" placeholder="Enter your email"/>
            <input className="m-3 mx-5 p-2 rounded-lg border-2" type="password" placeholder="Enter password"/>

            <HeroBtn classnames="m-3 mx-5 mt-9 font-semibold">Login</HeroBtn>
            <OutlineBtn classnames="m-3 mx-5 mb-5 font-semibold">Login using credentials</OutlineBtn>
            <p className="mb-5">Don't have an account? <Link to="/signin"  className="text-primary-color">Sign In</Link></p>
            </div>
            </section>
    )
}

export default Login

// absolute top-1/2 left-1/2 translate-y-1/2 translate-x-1/2