import "./PrimaryButton.css";

interface PrimaryButtonTypes {
  postId?: number;
  buttonFunction: (id: number) => void;
  buttonText: string;
}

export const PrimaryButton = ({
  postId = 0,
  buttonFunction,
  buttonText,
}: PrimaryButtonTypes) => {
  return (
    <button className="primary-button" onClick={() => buttonFunction(postId)}>
      {buttonText}
    </button>
  );
};
