import avatar from "assets/avatar.png";

const Header = () => {
  return (
    <div className="p-4 pr-9 flex justify-between shadow-sm">
      <h1 className="text-primary-color font-roboto font-bold text-4xl">
        magni<span className="text-secondary-color text-5xl">Z</span>ent
      </h1>
      <img src={avatar} alt="avatar" className="h-12 w-12 rounded-full" />
    </div>
  );
};

export default Header;
