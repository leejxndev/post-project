export const formatBodyText = (text: string): JSX.Element[] => {
  if (!text || typeof text !== "string") {
    throw new Error("Input must be a valid string");
  }

  // Split the text with each new line characters and return JSX
  return text.split("\n").map((line, index) => {
    // Capitalise the first letter of the line and add a full stop at the end
    const formattedLine =
      line.charAt(0).toUpperCase() +
      line.slice(1).trim() +
      (/[.!?]$/.test(line.trim()) ? "" : ".");

    return (
      <span key={index}>
        {formattedLine}
        {index < text.split("\n").length - 1 && <br />}
      </span>
    );
  });
};
