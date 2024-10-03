import React from "react";
import Header from "./Header";
import FilterTools from "./FilterTools";
import RestaurantList from "./RestaurantList";

const Home = () => {
  return (
    <>
      <section className="w-full p-8">
        <div className="mx-auto max-w-6xl flex flex-col gap-6">
          <Header />
          <FilterTools />
          <RestaurantList />
        </div>
      </section>
    </>
  );
};

export default Home;
