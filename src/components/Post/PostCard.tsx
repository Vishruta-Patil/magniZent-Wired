import avatar from "assets/avatar.png";
import { CreateComment } from "../Comment/CreateComment";
import { useState } from "react";
import { CommentCard } from "components/Comment/CommentCard";
import { MoreOptionsmOdal } from "components/common/moreOptions/MoreOptionsModal";
import { Avatar } from "components/common/avatar/Avatar";

const PostCard = () => {
  const [commentCard, setCommentCard] = useState(false);
  const [moreOptions, setMoreOPtions] = useState(false);
  const commentHandler = () => {
    setCommentCard((prev) => !prev);
  };
  return (
    <div className="flex flex-col p-5 md:m-9 m-4 bg-white-neutral shadow-lg ">
      <div className="flex flex-col space-x-3">
        <div className="flex  gap-3 relative">
         <Avatar classnames="h-14 w-14"/>
          <div>
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <p className="text-black text-xl font-semibold">
                  Vishruta Patil
                </p>
                <p className="text-secondary-color text-sm md:block hidden">1 min</p>
              </div>

              <p className="text-secondary-color text-sm text-left">
                @Vishruta_patil
              </p>
            </div>

            <div
              onClick={() => setMoreOPtions((prev) => !prev)}
              className="ml-auto absolute top-2 right-0"
            >
              <span className="material-icons text-2xl cursor-pointer ml-auto">
                more_vert
              </span>
            </div>
          </div>
          {moreOptions && <MoreOptionsmOdal />}
        </div>
        <div className="text-left mt-5 text-base">
          Shree Krishna Govinda Harae Murari Hae Nath Narayan Vasudeva, Radhae
          Radhae! Ambadnya, Nathasanvidh!
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <span className="material-icons text-2xl cursor-pointer p-2 rounded-full hover:bg-slate-200">
              favorite_outline
            </span>
            <p>1</p>
          </div>
          <div>
            <span
              className="material-icons text-2xl cursor-pointer p-2 rounded-full hover:bg-slate-200"
              onClick={commentHandler}
            >
              comment
            </span>
          </div>
          <div>
            <span className="material-icons text-2xl cursor-pointer p-2 rounded-full hover:bg-slate-200">
              share
            </span>
          </div>
          <div>
            <span className="material-icons text-2xl cursor-pointer p-2 rounded-full hover:bg-slate-200">
              bookmark_outline
            </span>
          </div>
        </div>
      </div>

      <>
        {commentCard && (
          <CreateComment
            commentCard={commentCard}
            setCommentCard={setCommentCard}
          />
        )}
      </>
      {/* <CommentCard /> */}
    </div>
  );
};

export default PostCard;
