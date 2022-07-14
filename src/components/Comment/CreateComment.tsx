import avatar from "assets/avatar.png";
import React, { SetStateAction } from "react";

export const CreateComment = () => {
    return (
        <div className="flex gap-4 border-2 rounded-3xl mt-2 p-5 md:m-9 m-4 lg:mx-14 md:mx-9 items-center">
            <img src={avatar} className="h-12 w-12 rounded-full"/>
            <textarea placeholder="Pen down your views" className="bg-transparent flex-1 outline-none"/>
            <span className="material-icons text-2xl cursor-pointer">send</span>
        </div>
    )
}