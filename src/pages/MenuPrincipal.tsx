import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const MenuPrincipal = () => {
  const { name } = useParams();

    const navigate = useNavigate();
    return (
      <div>
        <h1>Menú</h1>
        <div className="mainContainer">
          <div className='btnContainer'>
            <button className="btn" onClick={() => navigate(`/game/${name}/opciones-juego`)}>
              <span>Crear partida</span>
              <div className="dot"></div>
            </button>
          </div>
          <div className='btnContainer'>
            <button className="btn" onClick={() => navigate(`/game/${name}/union-game`)}>
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