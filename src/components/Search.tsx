import React from "react";

interface SearchProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}
const Search = ({ searchInput, setSearchInput }: SearchProps) => {
  return (
    <div className="search">
      <div className="">
        <img src="search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
