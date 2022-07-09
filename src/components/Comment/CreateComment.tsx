import avatar from "assets/avatar.png";
import React, { SetStateAction } from "react";

export const CreateComment = ({commentCard, setCommentCard} : {commentCard : boolean, setCommentCard: React.Dispatch<SetStateAction<boolean>>}) => {
    return (
        <div className="flex gap-2 border-2 p-1 rounded-3xl mt-2">
            <img src={avatar} className="h-9 w-9 rounded-full"/>
            <input placeholder="comment here" className="bg-transparent flex-1 outline-none"/>
            <span className="material-icons text-2xl cursor-pointer">send</span>
        </div>
    )
}