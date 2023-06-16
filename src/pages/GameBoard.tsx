import React from 'react';
import socket from "../Conecciones.js";
import { useParams } from "react-router-dom";

interface partyInfo {  
    nombre: string;
    idJugador: number;
    puntos: number;
}

const GameBoard = () => {
    const { name } = useParams();
    // const audio = new Audio('../sounds/12745.mp3');
    const [bloquer, setBloquer] = React.useState(true);
    const [partyInfo, setPartyInfo] = React.useState([]);
    const [movimientot, setMovimientot] = React.useState(0);
    const [tablero, setTablero] = React.useState([]);
    
    const mandarMovimiento = (movimiento: number) => {
      // audio.play();
      const buttons = document.getElementsByClassName('btn-class-game') as HTMLCollectionOf<HTMLElement>;
      if (bloquer && validarDisponibilidad(movimiento)) {
        console.log("entro en captarMovimiento: ", bloquer);
        setBloquer(false);
        buttons[movimiento].style.opacity = '0.5';
        setMovimientot(movimiento);
        socket.emit("captarMovimiento", {nombre: name, numero: movimiento});
      } else {
        buttons[movimientot].style.opacity = '1.0';
        socket.emit("realizarMovimiento", {nombre: name, numero: movimiento});
      }
    }

    const createBTN = () => {
        const buttons = []
        for (let i = 0; i < 63; i++) {
            buttons.push(<button onClick= { () => mandarMovimiento(i)} className="btn-class-game" key={i}></button>);
        }
        return buttons;
    }

    const validarDisponibilidad = (movimiento: number) => {
      let counter = 0;
      for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 9; j++) {
          if (counter === movimiento) {
            if (tablero[i][j][1] !== 'E') { 
              return false;
            } else { 
              return true;
            }
          }
          counter++;
        }
      }
      return true;
    };

    const buttons = createBTN();

    const ponerColor = (lista: any) => {
        const buttons = document.getElementsByClassName('btn-class-game') as HTMLCollectionOf<HTMLElement>;
        let counter = 0;
        
        for (let i = 0; i < lista.length; i++) {
          for (let j = 0; j < lista[i].length; j++) {

              // console.log(lista[i][j]);
              switch (lista[i][j][0]) {
                case 'B':
                  buttons[counter].style.backgroundColor = 'blue';
                  break;
                case 'R':
                  buttons[counter].style.backgroundColor = 'red';
                  break;
                case 'G':
                  buttons[counter].style.backgroundColor = 'green';
                  break;
                case 'Y':
                  buttons[counter].style.backgroundColor = 'yellow';
                  break;
                case 'V':
                  buttons[counter].style.backgroundColor = 'violet';
                  break;
                case 'O':
                  buttons[counter].style.backgroundColor = 'orange';
                  break;
                case 'W':
                  buttons[counter].style.backgroundColor = 'white';
                  break;
                default:
                  break;
              }
            counter++;
          }
        }
    };

    const cambiarPuntas = (lista: any) => {
      setPartyInfo(lista);
    };

    React.useEffect(() => {
        socket.emit("partyInfo", {roomName: 'room1'});
        socket.emit("sendTablero", {roomName: 'room1'});
        socket.on("sendTablero", (data) => {
            // console.log(data);
            setTablero(data);
            ponerColor(data);
        });
        socket.on("partyInfo", (data) => {
            // console.log(data);
            setPartyInfo(data);
        });
        socket.on("realizarMovimiento", (data) => {
            console.log("realizarMovimiento: ",data);
            setTablero(data.data);
            cambiarPuntas(data.jugadores);
            setBloquer(true);
            ponerColor(data.data);
        });
        socket.on("captarMovimiento", (data) => {
            console.log("captarMovimiento: ",data);
            setTablero(data.data)
        });
        return () => {
            // socket.off("sendTablero");
            // socket.off("partyInfo");
            // socket.off("realizarMovimiento");
        }
    }, []);

    return(
        <div className="gameboar-main-container">
            <div className="titulo-gameboard">
                <h1>Game Board</h1>
            </div>
            <div className="list-name-players">
                {partyInfo.map((player: partyInfo) => (
                    <div className="player-name" key={player.idJugador}>
                        <p>{player.nombre}: {player.puntos}</p>
                    </div>
                ))}
            </div>
            <div className="play-board">{buttons}</div>
            
        </div>
    );
}

export default GameBoard;