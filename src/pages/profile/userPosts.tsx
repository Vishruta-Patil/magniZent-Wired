import PostCard from "components/Post/PostCard";
import { useAppSelector } from "hooks";
import { useParams } from "react-router-dom";

export const UserPosts = () => {
  const { allPosts } = useAppSelector((store) => store.posts);
  const { allUsers } = useAppSelector((store) => store.auth);
  const params = useParams();
  const { profileId } = params;

  let userDetails: any = allUsers.find((user: any) => user?.id === profileId);

  const userPosts: any =
    allPosts.filter((post: any) => post.id === userDetails?.id) ?? [];

  return (
    <div>
      {userPosts?.map((item: any, index: any) => (
        <div>
          <PostCard item={item} key={index} />
        </div>
      ))}
    </div>
  );
};
