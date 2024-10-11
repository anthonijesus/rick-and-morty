import React, { useEffect, useState } from 'react'
import CardInfo from './CardInfo';

const Home = () => {

    const initialState = []
    const [personajes, setPersonajes] = useState(initialState);

    useEffect(() => {
        const fetchPersonajes = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character')
                const data = await response.json()
                setPersonajes(data.results)
            } catch (error) {
                console.log('Error al traer los datos de la API', error)
            }
        }

        fetchPersonajes()

    }, []);



    return (
        <>
            <div>Rick And Morty API</div>

            <ul>
                {
                    personajes.map((personaje) => {
                        return (
                            <li key={personaje.id}>
                                <div>
                                    <img src={personaje.image} alt={personaje.name} />
                                    <CardInfo personaje={personaje} />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>

    )
}

export default Home