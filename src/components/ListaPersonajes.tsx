import React, { useEffect, useState } from "react";
import { getCharacters } from "../service/marvelService";
import "./estilos.css";

interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
}

const CharactersList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getCharacters("Spider");
        setCharacters(results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="page">
      <h1 className="title">Personajes de Marvel - Gisselle Severich </h1>

      <div className="characters-grid">
        {characters.map((char) => (
          <div key={char.id} className="card">
            <img
              src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
              alt={char.name}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{char.name}</h2>
              <p className="card-description">
                {char.description || "No tiene descripción "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersList;
