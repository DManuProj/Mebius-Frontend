import Button from "./Button";
import Hero from "./Hero";
import Navigation from "./Navigation";

function App() {
  const name = null;
  const cartCount = 0;

  return (
    <div>
      <Navigation name={name} cartCount={cartCount} />
      <Hero />
      <div className="p-4">
        <Button>Buy Now</Button>
      </div>
    </div>
  );
}

export default App;
