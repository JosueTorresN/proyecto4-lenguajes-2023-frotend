import React from "react";
// import axios from "axios";
// import '../styles/MenuPrincipal.css';

class MenuPrincipal extends React.Component {
  render() {
    return (
      <div>
        <h1>Menú</h1>
        <div className="mainContainer">
          <div className='btnContainer'>
            <button className="btn">
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
  }
}

export default MenuPrincipal;