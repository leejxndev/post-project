import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import SearchBar from "@/components/searchBar/SearchBar"; // Adjust path as needed

describe("SearchBar Component", () => {
  it("updates search results when the user types in the search input", async () => {
    // Mock the searchHandler function
    const searchHandler = vi.fn();

    // Render the SearchBar with the mocked searchHandler
    render(<SearchBar searchHandler={searchHandler} />);

    // Get the input element by data-testid
    const searchInput = screen.getByTestId("search-box");
    // Simulate user typing into the input box
    await userEvent.type(searchInput, "Lorem");

    // Assert that searchHandler was called with the correct search terms
    expect(searchHandler).toHaveBeenCalledWith("L");
    expect(searchHandler).toHaveBeenCalledWith("Lo");
    expect(searchHandler).toHaveBeenCalledWith("Lor");
    expect(searchHandler).toHaveBeenCalledWith("Lore");
    expect(searchHandler).toHaveBeenCalledWith("Lorem");
    expect(searchHandler).toHaveBeenCalledTimes(5);
  });
});
