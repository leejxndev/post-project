import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Post from "@/components/post/Post";
import { NonEmptyString } from "@/types";

test("Checks that the title and body are rendered", async () => {
  // Cast valid strings to NonEmptyString
  const title: NonEmptyString = "Sample Title" as NonEmptyString;
  const body: NonEmptyString = "Sample Body" as NonEmptyString;

  const { findByTestId, unmount } = render(
    <Post postId={1} titleText={title} bodyText={body} />
  );

  // Check that the title is present
  const postTitle = await findByTestId("title");
  expect(postTitle).toBeTruthy();

  // Check that the body is present
  const postBody = await findByTestId("body");
  expect(postBody).toBeTruthy();

  // Clean up
  unmount();
});
