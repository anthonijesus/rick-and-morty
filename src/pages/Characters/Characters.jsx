import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
const Characters = () => {
  const initialState = [];
  const errorInitialState = "";
  const [personajes, setPersonajes] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState(errorInitialState);

  useEffect(() => {
    const fetchPersonajes = async () => {
      try {
        //const response = await fetch('https://rickandmortyapi.com/api/character')
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        //const data = await response.json()
        setPersonajes(data.results);
      } catch (error) {
        console.log(error);
        setErrorMessage("Error al traer los datos de la API");
      }
    };

    fetchPersonajes();
  }, []);
  return (
    <div className={styles.personajes}>
      {errorMessage.length > 0 ? (
        errorMessage
      ) : (
        <>
          <h2>Rick And Morty API</h2>
          <ul>
            {personajes.map((personaje) => {
              return (
                <li key={personaje.id}>
                  <div>
                    <img
                      src={personaje.image}
                      alt={personaje.name}
                      className={styles.image}
                    />
                    <p>{personaje.name}</p>
                    <span>{personaje.status}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Characters;
