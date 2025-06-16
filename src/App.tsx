import React from "react";

const App = () => {
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
        <p className="">Search</p>
      </div>
    </main>
  );
};

export default App;
