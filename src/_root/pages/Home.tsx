import Loader from "../../components/shared/Loader";
import { useGetRecentPosts } from "../../lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import PostCard from "../../components/shared/PostCard";

const Home = () => {
  const { data: posts, isPending: isPostLoading } = useGetRecentPosts();
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-post">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts?.documents.map((post: Models.Document) => (
                <PostCard post={post} key={post.caption} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
