import React from "react";
import { useNavigate } from "react-router-dom";

const MenuPrincipal = () => {

    const navigate = useNavigate();
    return (
      <div>
        <h1>Menú</h1>
        <div className="mainContainer">
          <div className='btnContainer'>
            <button className="btn" onClick={() => navigate('/opciones-juego')}>
              <span>Crear partida</span>
              <div className="dot"></div>
            </button>
          </div>
          <div className='btnContainer'>
            <button className="btn">
              <span>Unirse a partida</span>
              <div className="dot"></div>
            </button>
          </div>
          <div className='btnContainer'>
            <button className="btn">
              <span>Ver ranking</span>
              <div className="dot"></div>
            </button>
          </div>
        </div>
      </div>
    );
  };

export default MenuPrincipal;