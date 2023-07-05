import './App.css';
import Juegos from './Juegos';

function App() {
  return (
    <div>
      <h1 className="titulo">Lista de Juegos pendientes</h1>
      <Juegos nombre="Core Keeper" tipo="Construccion" tamaño="mediano" />
      <Juegos nombre="Jurasic World" tipo="Estrategia" tamaño="pequeño" />
      <Juegos nombre="Hollow Knight" tipo="MetroidVania"  tamaño="pequeño" />
    </div>
  );
}

export default App;
