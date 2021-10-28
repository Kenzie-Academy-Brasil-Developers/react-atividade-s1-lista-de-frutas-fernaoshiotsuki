import "./App.css";
import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const FruitMap = () => {
    let names = fruits.map((x) => {
      return <li>{x.name}</li>;
    });
    return names;
  };

  const filteredRedFruits = () => {
    setFruits(
      fruits.filter((x) => {
        return x.color === "red";
      })
    );
  };

  const totalPrice = fruits
    .map((x) => {
      return x.price;
    })
    .reduce((x, y) => x + y);

  return (
    <div className="App">
      <header className="App-header">
        <div>Fruits Price Sum = {totalPrice}</div>
        <ul>
          <FruitMap></FruitMap>
        </ul>
        <button onClick={filteredRedFruits}> Filter Red Fruits</button>
      </header>
    </div>
  );
}

export default App;
