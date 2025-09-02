import React from "react";
import "./estilos.css"

interface Resultado {
  parrafo: string;
  palabra: string;
}

function busquedaBinaria(palabras: string[], palabra: string): number[] {
  let inicio = 0;
  let fin = palabras.length - 1;
  let posiciones: number[] = [];

  while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);

    if (palabras[medio] === palabra) {
      posiciones.push(medio);

     
      let izq = medio - 1;
      while (izq >= 0 && palabras[izq] === palabra) {
        posiciones.push(izq);
        izq--;
      }
     
      
      let der = medio + 1;
      while (der < palabras.length && palabras[der] === palabra) {
        posiciones.push(der);
        der++;
      }
      break;
    } else if (palabras[medio] < palabra) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  return posiciones.sort((a, b) => a - b);
}

const Resultado: React.FC<Resultado> = ({ parrafo, palabra }) => {
 
  const palabras = parrafo.trim().split(/\s+/).sort();
  const posiciones = palabra ? busquedaBinaria(palabras, palabra) : [];

  return (
    <div className="resultado">
      {palabra && (
        posiciones.length > 0 ? (
          <p>
            La palabra <b>{palabra}</b> se encontró en el texto
          </p>
        ) : (
          <p>
            La palabra <b>{palabra}</b> no se encontró en el texto.
          </p>
        )
      )}
    </div>
  );
};

export default Resultado;