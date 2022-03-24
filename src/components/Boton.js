import React from 'react'
import '../componentes-css/Boton.css'

const Boton = ({ texto, esBotonDeClick, manejarClick }) => {
    return (
        <button
            className={esBotonDeClick ? 'botonClick' : 'botonReiniciar'}
            onClick={manejarClick}
        >
            {texto}
        </button>
    );
}

export default Boton;