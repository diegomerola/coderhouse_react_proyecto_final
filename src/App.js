import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const greeting = {
    titulo: "Bienvenidxs a Electro!",
    subtitulo: "Subtitulo de prueba",
  };
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </div>
  );
}

export default App;
