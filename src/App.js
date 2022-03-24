import logoApp from './img/app-counter-logo.png'
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';


function App() {

  const [numClicks, setNumClicks] = useState(0);


  const manejarClick = () => {
    // localStorage.setItem('count', JSON.stringify(numClicks));

    setNumClicks(numClicks + 1);


  };

  // const LS = localStorage.getItem('count') ? JSON.parse(localStorage.getItem('count')) : manejarClick();
  const reiniciarContador = () => {
    // localStorage.setItem('count', 0);
    setNumClicks(0);

  };
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img src={logoApp} alt="Logo de App Counter" />
      </div>

      <div className="componente-principal">
        <Contador numClicks={numClicks} />

        <Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />

        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />

      </div>
    </div>
  );
}

export default App;
