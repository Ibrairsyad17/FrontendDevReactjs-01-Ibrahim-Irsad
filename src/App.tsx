import "./App.css";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <>
      <section className="w-full px-8">
        <div className="mx-auto max-w-7xl">
          <RestaurantList />
        </div>
      </section>
    </>
  );
}

export default App;
