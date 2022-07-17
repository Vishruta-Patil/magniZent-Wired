import { MoreOptionsmOdal } from "components/common/moreOptions/MoreOptionsModal";
import { useAppSelector } from "hooks";
import { useState } from "react";
import { CommentDataType } from "types/user.types";

export const CommentCard = ({
  comment,
  postId,
}: {
  comment: CommentDataType;
  postId: string | undefined;
}) => {
  const [commentOptions, setCommentOptions] = useState(false);
  const { authToken, allUsers, avatarList } = useAppSelector(
    (store) => store.auth
  );

  let userDetails: any = allUsers.find((user) => user?.id === comment?.id);
  const getUserAvatar = avatarList.find(
    (user: any) => user?.id === userDetails?.id
  );

  return (
    <div className="flex gap-3 p-5 lg:mx-14 md:mx-9 mb-0 ">
      <img src={getUserAvatar?.url} className="h-11 w-11 rounded-full" />
      <div className="bg-slate-200 flex-1 p-3 rounded">
        <div className="flex md:gap-3 gap-1 text-secondary-color flex-wrap">
          <div className="flex flex-col lg:flex-row text-left lg:gap-4">
            <p className="text-black font-semibold">{comment.name}</p>
            <p>@{comment.username}</p>
          </div>
          <div className="relative ml-auto">
            {comment.id === authToken && (
              <span
                onClick={() => setCommentOptions((prev) => !prev)}
                className="material-icons text-2xl cursor-pointer mr-3"
              >
                more_horiz
              </span>
            )}
            {commentOptions && (
              <MoreOptionsmOdal
                comment={true}
                commentDetails={comment}
                postId={postId}
              />
            )}
          </div>
        </div>
        <p className="text-left mt-2">{comment.comment}</p>
      </div>
    </div>
  );
};
