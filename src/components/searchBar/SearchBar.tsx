import "./SearchBar.css";

interface SearchBarTypes {
  searchHandler: (value: string) => void;
}

const SearchBar = ({ searchHandler }: SearchBarTypes) => {
  return (
    <div className="search-bar-container">
      <input
        data-testid="search-box"
        className="search-input"
        type="text"
        id="searchInput"
        placeholder="Search posts..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          searchHandler(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
