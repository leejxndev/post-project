import { useCallback } from "react";
import { PrimaryButton } from "../shared/primaryButton/PrimaryButton";
import "./Post.css";
import { formatBodyText } from "@/helpers/formatBodyText";
import usePosts from "@/hooks/usePosts";
import { NonEmptyString } from "../../types";

interface PostTypes {
  postId: number;
  titleText: NonEmptyString;
  bodyText: NonEmptyString;
}

const Post = ({ postId, titleText, bodyText }: PostTypes) => {
  // Destructure the deletePost function from usePosts hook
  const { deletePost } = usePosts();

  // Memoize deletePostHandler to prevent unnecessary re-renders
  const deletePostHandler = useCallback(
    (id: number) => {
      deletePost(id);
    },
    [deletePost]
  );

  return (
    <div className="post-container">
      <div className="post-text-content">
        <h2 data-testid="title" className="post-title-text">
          {titleText}
        </h2>
        <p data-testid="body" className="post-body-text">
          {formatBodyText(bodyText)}
        </p>
        <div className="remove-button-container">
          <PrimaryButton
            postId={postId}
            buttonFunction={deletePostHandler}
            buttonText="Remove"
          />
        </div>
      </div>
      <div className="post-image-content">
        <div className="post-image-gradient"></div>
        <div className="post-image">
          <img
            src={`https://picsum.photos/id/4${postId}/400/250`}
            alt={`Image related to post ID ${postId}`}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://picsum.photos/id/210/400/250";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
