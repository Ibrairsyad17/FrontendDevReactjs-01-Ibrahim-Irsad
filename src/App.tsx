import "./index.css";
import FilterTools from "./components/Home/FilterTools";
import Header from "./components/Home/Header";
import RestaurantList from "./components/Home/RestaurantList";

function App() {
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
}

export default App;
