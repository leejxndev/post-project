import { useState } from "react";
import { UsePostTypes, PostTypes } from "@/types";

interface PostsCounter {
  filteredPostsCount: number;
  allPostsCount: number;
}

type FetchOptions = {
  method: "GET" | "POST" | "PUT" | "DELETE";
};

interface ApiResponse<T> {
  data: T;
  status: number;
  error?: string;
}

const usePosts = (): UsePostTypes => {
  const postsApiUrl = import.meta.env.VITE_API_URL + "/posts";

  const [allPosts, setAllPosts] = useState<PostTypes[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPosts = async (): Promise<void> => {
    setIsLoading(true);

    const fetchOptions: FetchOptions = {
      method: "GET",
    };

    try {
      // Make a HTTP request to fetch posts
      const response = await fetch(postsApiUrl, fetchOptions);

      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.statusText}`);
      }

      // Type the API response (data) as PostTypes[] to ensure the posts are correctly structured
      const data: PostTypes[] = (await response.json()) as ApiResponse<
        PostTypes[]
      >["data"];

      // Update state with all fetched posts
      setAllPosts(data);
      setFilteredPosts(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching posts:", error.message);
      } else {
        console.error("Unknown error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const searchPosts = (searchTerm: string): void => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Filter posts that titles include the search term
    const filtered = allPosts.filter((post) =>
      post.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredPosts(filtered);
  };

  const postsCounter = (): PostsCounter => ({
    // Count the total and filtered number of posts
    filteredPostsCount: filteredPosts.length,
    allPostsCount: allPosts.length,
  });

  const deletePost = async (postId: number): Promise<void> => {
    setIsLoading(true);

    const fetchOptions: FetchOptions = {
      method: "DELETE",
    };

    try {
      // Make a HTTP request to delete a specific post
      const response = await fetch(`${postsApiUrl}/${postId}`, fetchOptions);

      if (!response.ok) {
        throw new Error(`Failed to delete post: ${response.statusText}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error deleting post:", error.message);
      } else {
        console.error("Unknown error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Return state and functions
  return {
    filteredPosts,
    isLoading,
    fetchPosts,
    searchPosts,
    postsCounter,
    deletePost,
  };
};

export default usePosts;
