export type NonEmptyString = string & { __nonEmpty: never };

export interface PostTypes {
  userId: number;
  id: number;
  title: NonEmptyString;
  body: NonEmptyString;
}

export interface UsePostTypes {
  filteredPosts: PostTypes[];
  isLoading: boolean;
  fetchPosts: () => Promise<void>;
  searchPosts: (searchTerm: string) => void;
  postsCounter: () => {
    filteredPostsCount: number;
    allPostsCount: number;
  };
  deletePost: (postId: number) => Promise<void>;
}
