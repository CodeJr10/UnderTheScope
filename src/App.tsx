import React, { useState } from "react";

import Search from "./components/Search";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <main className="">
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="/hero.png" alt="Hero Banner" />
          <h1 className="">
            Find Your Favorite <span className="text-gradient">Movies</span>{" "}
          </h1>
        </header>
        <div className="">
          <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        </div>
      </div>
    </main>
  );
};

export default App;
