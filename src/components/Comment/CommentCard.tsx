import { Avatar } from "components/common/avatar/Avatar";
import { MoreOptionsmOdal } from "components/common/moreOptions/MoreOptionsModal";
import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";
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

  const [avatar, setAvatar] = useState<any>()

  useEffect(() => { // change 1
    let userDetails: any = allUsers.find((user) => user?.id === comment?.id);
  const getUserAvatar = avatarList.find(
    (user: any) => user?.id === userDetails?.id
  );
  setAvatar(getUserAvatar)
  }, [])

  let userDetails: any = allUsers.find((user) => user?.id === comment?.id);

  return (
    <div className="flex gap-3 p-5 lg:mx-14 md:mx-9 mb-0 ">
      <Avatar
            classnames="h-11 w-11"
            profileAvatar={userDetails?.avatarUrl}
            id={userDetails?.id}
          />

      <div className="bg-slate-200 flex-1 p-3 rounded dark:bg-dark-highlight-color dark:text-white-neutral">
        <div className="flex md:gap-3 gap-1 text-secondary-color flex-wrap">
          <div className="flex flex-col lg:flex-row text-left lg:gap-4">
            <p className="text-black dark:text-white-neutral font-semibold">{comment.name}</p>
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
                setMoreOPtions={setCommentOptions}
              />
            )}
          </div>
        </div>
        <p className="text-left mt-2">{comment.comment}</p>
      </div>
    </div>
  );
};
