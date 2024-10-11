import React from 'react'

const CardInfo = ({ personaje }) => {
    /*const personaje = props.personaje*/ /* esta forma la usamos cuando no des-estructuramos el objeto que viene como parametro*/
    return (
        <div>
            <p>{personaje.name}</p>
            <span>{personaje.status}</span>
        </div>
    )
}

export default CardInfo