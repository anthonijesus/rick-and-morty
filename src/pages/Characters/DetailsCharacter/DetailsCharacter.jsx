import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsCharacter = () => {
  const [personaje, setPersonaje] = useState({});
  const { characterId } = useParams();

  useEffect(() => {
    const fetchPersonajes = async () => {
      try {
        //const response = await fetch('https://rickandmortyapi.com/api/character')
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${characterId}`
        );
        //const data = await response.json()
        setPersonaje(data);
      } catch (error) {
        console.log(error);
        setErrorMessage("Error al traer los datos de la API");
      }
    };

    fetchPersonajes();
  }, []);
  //console.log(personaje);
  return <div>DetailsCharacter</div>;
};

export default DetailsCharacter;
