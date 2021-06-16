import { useState } from "react";

export const Circulo = () => {
  const [activo, setActivo] = useState(false);
  const toggleActivo = () => setActivo(!activo);
  return (
    <div
      className={`circulo${activo ? " activo" : ""}`}
      onClick={toggleActivo}
    ></div>
  );
};
