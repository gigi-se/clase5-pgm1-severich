import React, { useState } from "react";
import "./estilos.css";

interface Entradas {
  onSearch: (parrafo: string, palabra: string) => void;
}

const Entrada: React.FC<Entradas> = ({ onSearch }) => {
  const [parrafo, setParrafo] = useState("");
  const [palabra, setPalabra] = useState("");

  const handleParrafoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParrafo(event.target.value);
  };

  const handlePalabraChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPalabra(event.target.value);
  };

  const handleSearch = () => {
    onSearch(parrafo, palabra);
  };
  
  const handleLimpiar = () => {
    setParrafo("");
    setPalabra("");
    onSearch("", "");
  }

  return (
    <div className="busqueda">
       <h2>Buscador de Palabras - Gisselle Severich </h2> 
      <input
        type="text"
        value={parrafo}
        onChange={handleParrafoChange}
        placeholder="Introduce una oración"
        
      />
      <input
        type="text"
        value={palabra}
        onChange={handlePalabraChange}
        placeholder="Introduce una palabra"
      />
      <div className="buttons">
      <button onClick={handleSearch} className="btn-buscar">Buscar</button>
      <button onClick={handleLimpiar} className="btn-limpiar">Limpiar</button>
      </div>
      
    </div>
  );
};
export default Entrada;