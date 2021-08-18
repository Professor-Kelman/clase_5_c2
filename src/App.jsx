import Veterinaria from "./components/Veterinaria";
import List from "./components/List";
import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item";

const name = "Pipo";
const names = ["Pacha", "Firulais", "Maya", name];
const animals = [
  {
    age: 24,
    gender: "Macho de las praderas",
    raza: "Pastor peluche",
    size: "Grandote",
  },
  {
    age: 15,
    gender: "Hembra hermosa",
    raza: "Pastor peluche",
    size: "Grandote",
  },
  {
    age: 3,
    gender: "Machote",
    raza: "Pastor peluche",
    size: "Grandote",
  },
  {
    age: 34,
    gender: "Perrote",
    raza: "Pastor peluche",
    size: "Grandote",
  },
];

function App() {
  return (
    <div className="App">
      <Veterinaria />
      {names.map((name, index) => (
        <List>
          <h4>Nombre: {name}</h4>
          <ul>
            <Item prefix="Edad" type={animals[index].age} />
            <Item prefix="Sexo" type={animals[index].gender} />
            <Item prefix="Raza" type={animals[index].raza} />
            <Item prefix="Tamaño" type={animals[index].size} />
            <Item prefix="Color" type="red" />
          </ul>
        </List>
      ))}
    </div>
  );
}

export default App;
