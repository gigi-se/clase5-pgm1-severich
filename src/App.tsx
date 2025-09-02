import React, { useState } from "react";
import Entrada from "./components/entradas";
import Resultado from "./components/result";
import "./App.css";
import reactLogo from "./logo.svg"; 

const App: React.FC = () => {
  const [parrafo, setParrafo] = useState("");
  const [palabra, setPalabra] = useState("");

  const handleSearch = (nuevoParrafo: string, nuevaPalabra: string) => {
    setParrafo(nuevoParrafo);
    setPalabra(nuevaPalabra);
  };

  return (
   <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <img src={reactLogo}  style={{ width: "100px" }} />
      </div>
      <Entrada onSearch={handleSearch} />
      <Resultado parrafo={parrafo} palabra={palabra} />
    </div>
  );
};

export default App;