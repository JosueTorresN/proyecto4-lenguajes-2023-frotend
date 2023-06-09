import React from 'react';
import socket from "../Conecciones.js";

function createBTN() {
    const buttons = []
    for (let i = 0; i < 63; i++) {
        buttons.push(<button className="btn-class-game" key={i}>Button {i}</button>);
    }
    return buttons;
}  

const GameBoard = () => {
    React.useEffect(() => {
        socket.emit("partyInfo", {roomName: 'room1'});
        socket.on("partyInfo", (data) => {
            console.log(data);
        });
    }, []);

    const buttons = createBTN();

    return(
        <div className="gameboar-main-container">
            <div className="titulo-gameboard">
                <h1>Game Board</h1>
            </div>
            <div className="list-name-players">
                    
            </div>
            <div className="play-board">{buttons}</div>
            
        </div>
    );
}

export default GameBoard;