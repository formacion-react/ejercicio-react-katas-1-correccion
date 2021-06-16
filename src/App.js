import { Circulo } from "./componentes/Circulo";

function App() {
  const nCirculos = 5;
  const circulos = Array.from(new Array(nCirculos)).map((valor, i) => i);
  return (
    <>
      {circulos.map((circulo) => (
        <Circulo key={circulo} />
      ))}
    </>
  );
}

export default App;
