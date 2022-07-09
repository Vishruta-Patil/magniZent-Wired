import avatar from "assets/avatar.png";
import { MoreOptionsmOdal } from "components/common/moreOptions/MoreOptionsModal";
import { useState } from "react";

export const CommentCard = () => {
    const [commentOptions, setCommentOptions] = useState(false);
    return (
        <div className="flex gap-3 p-2 mt-5">
            <img src={avatar} className="h-10 w-10 rounded-full"/>
            <div className="bg-slate-200 flex-1 p-2 rounded">
                <div className="flex md:gap-3 gap-1 text-secondary-color flex-wrap">
                    <p>Vishruta Patil</p>
                    <p>@vishruta_patil</p>
                    <p className="md:block hidden">1 min</p>
                    <div className="relative ml-auto">
                    <span onClick={() => setCommentOptions(prev => !prev)} className="material-icons text-2xl cursor-pointer mr-3">more_horiz</span>
                    {commentOptions && <MoreOptionsmOdal /> }
                    </div>
                </div>
                <p className="text-left mt-2">Here will be the comment</p>
            </div>
        </div>
    )
}