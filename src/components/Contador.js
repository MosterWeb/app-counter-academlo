import React from 'react';
import '../componentes-css/Contador.css'
const Contador = (props) => {
    return (
        <div class="contador">
            {props.numClicks}
        </div>
    );
}

export default Contador;