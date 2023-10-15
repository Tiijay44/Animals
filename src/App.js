import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["cow", "bird", "dog", "gator", "cat", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // modifies a piece of state!!!
    //animals.push(getRandomAnimal())
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button className="btn" onClick={handleClick}>
        Add Animal
      </button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
