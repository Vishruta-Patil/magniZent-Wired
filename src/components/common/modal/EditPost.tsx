import { useAppSelector } from "hooks";
import { Avatar } from "../avatar/Avatar";
import { HeroBtn } from "../button/HeroBtn";

export const EditPostModal = () => {
  const { avatar } = useAppSelector((store) => store.auth);
  return (
    // fixed p-4 left-0 right-0 top-0 h-screen z-50 flex justify-center items-center bg-overlay-color
    // bg-slate-200 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8/12  min-w-[60%] p-4
    <div className="fixed p-4 left-0 right-0 top-0 h-screen z-50 flex justify-center items-center bg-overlay-color">
      <div className=" bg-slate-200 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6/12 lg:w-3/12 min-w-[90%] md:min-w-[70%] lg:min-w-[40%] p-4">
      <div className="flex gap-3 text-left">
        <Avatar profileAvatar={avatar} classnames="w-14 h-14" />
        <div className="flex flex-col ">
          <p className="text-lg font-semibold">Vishruta Patil</p>
          <p>@vishruta_patil</p>
        </div>
        <span className="material-icons ml-auto">close</span>
      </div> 
        <textarea
          className="bg-transparent
        w-11/12
        text-base
        md:text-lg
        text-secondary-color
        mt-5
        focus:outline-none
        mb-12
        resize-none
        overflow-hidden
        min-h-[50%]
        h-auto  
        "
        value="Shree krishna"
        placeholder="Here will be input"
        onChange={()=>{}}
        />
      
      <HeroBtn classnames="ml-auto absolute bottom-0 right-0">Post</HeroBtn>
    </div>
    </div>
  );
};
