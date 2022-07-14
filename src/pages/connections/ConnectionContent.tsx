import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { getAllUsers } from "services/authService";

export const ConnectionContent = () => {
  const authToken = localStorage.getItem("authToken")
  const { allUsers } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch()
  


  const getUser = allUsers.find(user => user.id === authToken)

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <section className="p-7 mt-9 lg:m-16 m-8 relative bg-secondary-pale shadow-lg text-left">
      <div className="flex gap-2 justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-primary-color">Hey {getUser?.name ?? "User"},</h2>
          <p className="text-lg font-semibold">
            Make some cool connections now!
          </p>
          <p>
          You can revisit your existing peers here, or even better find new people to connect to. Voice your thoughts out in the wild, you'll definitely hear an echo back
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/debanftke/image/upload/v1657799390/118_dpyfkz.png"
          alt="connections"
          className="lg:w-72 lg:h-44 lg:mr-3 w-52 h-40 hidden md:block"
        />
      </div>
    </section>
  );
};