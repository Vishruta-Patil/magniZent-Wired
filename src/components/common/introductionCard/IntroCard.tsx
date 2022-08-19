import { useAppSelector } from "hooks";

export const IntroCard = ({header, description} : {header:string, description:string}) => {
  const authToken = localStorage.getItem("authToken");
  const { allUsers } = useAppSelector((store) => store.auth);
  const getUser = allUsers.find((user) => user.id === authToken);
  return (
    <section className="px-7 py-5 mt-9 lg:m-12 m-8 relative bg-secondary-pale shadow-lg text-left dark:bg-dark-highlight-color dark:text-white-neutral rounded-lg border-b dark:border-primary-color">
      <div className="flex gap-2 justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-primary-color">
            Hey {getUser?.name ?? "User"},
          </h2>
          <p className="text-lg font-semibold">
            {header}
          </p>
          <p>
            {description}
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
