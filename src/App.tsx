import { useEffect } from "react";
import "./App.css";
import Post from "./components/post/Post";
import usePosts from "./hooks/usePosts";
import SearchBar from "./components/searchBar/SearchBar";
import { PostTypes, UsePostTypes } from "@/types";

const App = () => {
  // Destructure the usePosts hook
  const {
    filteredPosts,
    isLoading,
    fetchPosts,
    searchPosts,
    postsCounter,
  }: UsePostTypes = usePosts();

  // Fetch posts when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle search input by calling searchPosts with the search term
  const searchHandler = (searchTerm: string) => {
    searchPosts(searchTerm);
  };

  // Destructure post counts from postsCounter function
  const { filteredPostsCount, allPostsCount } = postsCounter();

  return (
    <div className="app-container">
      <div className="menu-container">
        <SearchBar searchHandler={searchHandler} />
      </div>
      <div className="post-counter-container">
        <p>
          Showing{" "}
          {filteredPostsCount === allPostsCount
            ? `all ${allPostsCount} posts`
            : `${filteredPostsCount} of ${allPostsCount} posts`}
        </p>
      </div>
      <div className="posts-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          filteredPosts.map((post: PostTypes) => (
            <Post
              key={post.id}
              postId={post.id}
              titleText={post.title}
              bodyText={post.body}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
