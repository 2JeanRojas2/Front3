import './App.css';
import Perros from './Perros';

function App() {
  return (
    <div>
      <h1>Clientes caninos de Veterinaria</h1>
      <Perros nombre="pepe" edad="1" sexo="macho" raza="pitbull" tamaño="mediano" />
      <Perros nombre="otto" edad="2" sexo="macho" raza="mestizo" tamaño="pequeño" />
      <Perros nombre="pepina" edad="5" sexo="hembra" raza="chihuahua" tamaño="pequeño" />
    </div>
  );
}

export default App;
