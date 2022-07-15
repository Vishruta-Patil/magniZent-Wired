import { MoreOptionsmOdal } from "components/common/moreOptions/MoreOptionsModal";
import { useAppSelector } from "hooks";
import { useState } from "react";
import { CommentData } from "types/user.types";

export const CommentCard = ({comment}:{comment:CommentData}) => {
    const [commentOptions, setCommentOptions] = useState(false);
    const {avatar} = useAppSelector(store => store.auth)
    return (
        <div className="flex gap-3 p-5 lg:mx-14 md:mx-9 mb-0">
            <img src={avatar} className="h-10 w-10 rounded-full"/>
            <div className="bg-slate-200 flex-1 p-2 rounded">
                <div className="flex md:gap-3 gap-1 text-secondary-color flex-wrap">
                    <div className="flex flex-col lg:flex-row text-left lg:gap-5">
                    <p className="text-black font-semibold">{comment.name}</p>
                    <p>@{comment.username}</p>
                    </div>
                    <div className="relative ml-auto">
                    <span onClick={() => setCommentOptions(prev => !prev)} className="material-icons text-2xl cursor-pointer mr-3">more_horiz</span>
                    {commentOptions && <MoreOptionsmOdal /> }
                    </div>
                </div>
                <p className="text-left mt-3">{comment.comment}</p>
            </div>
        </div>
    )
}