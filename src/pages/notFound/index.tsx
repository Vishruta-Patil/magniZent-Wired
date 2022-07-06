import { HeroBtn } from "components";
import Header from "components/Header";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <Header />

      <div className="mt-12 max-w-4xl m-auto flex-col justify-center items-center">
        <div className="m-auto max-w-xl">
          <img src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1649009736/ecommerce/404Image_s8lokh.webp" alt="404 Not Found" />
        </div>
        <div className="m-9">
          <h2 className="text-4xl mb-3 text-secondary-color font-bold">
            We couldn't find any matches!
          </h2>
          <Link to="/">
            <HeroBtn classnames="px-14 text-xl font-bold">Home</HeroBtn>
          </Link>
        </div>

      </div>
    </div>
  );
};



