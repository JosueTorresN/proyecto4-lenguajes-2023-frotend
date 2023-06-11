import React from 'react';
import socket from "../Conecciones.js";

interface partyInfo {  
    nombre: string;
    idJugador: number;
    puntos: number;
}

function createBTN() {
    const buttons = []
    for (let i = 0; i < 63; i++) {
        buttons.push(<button className="btn-class-game" key={i}>Button {i}</button>);
    }
    return buttons;
}  

const GameBoard = () => {
    const [partyInfo, setPartyInfo] = React.useState([]);

    React.useEffect(() => {
        socket.emit("partyInfo", {roomName: 'room1'});
        socket.on("partyInfo", (data) => {
            console.log(data);
            setPartyInfo(data);
        });
    }, []);

    const buttons = createBTN();

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