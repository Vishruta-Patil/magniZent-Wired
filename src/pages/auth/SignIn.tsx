import { HeroBtn } from "components"
import { OutlineBtn } from "components/common/button/OutlineBtn"
import Header from "components/Header"
import { Link } from "react-router-dom"

const SignIn = () => {
    return (
        <section>
            <Header />
            <div className="flex flex-col max-w-3xl mx-5 md:mx-auto mt-20 shadow-2xl bg-white-neutral">
                <h1 className="text-primary-color my-4 mb-2 text-3xl font-bold">REGISTER</h1>

                <p>Looks like you are new! Please fill in the information below.</p>

                <input className="m-3 mt-7 p-2 rounded-lg border-2" type="email" placeholder="Enter your email" />
                <input className="m-3 p-2 rounded-lg border-2" type="password" placeholder="Enter password" />

                <HeroBtn classnames="m-3 mt-9 mb-5 font-bold p-2">Sign In</HeroBtn>

                <p className="mb-5">Already have an account? <Link to="/login" className="text-primary-color">Log In!</Link></p>
            </div>
        </section>
    )
}

export default SignIn