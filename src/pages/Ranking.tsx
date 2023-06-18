import React from 'react';
import socket from "../Conecciones.js";



const Ranking = () => {
    const [jugadores, setJugadores] = React.useState([{nombre: '', puntaje: 0, idPartida: ''}]);

    React.useEffect(() => {
        socket.emit('ranking', 'ranking');
        socket.on('ranking', (data) => {
            setJugadores(data);
        });
    }, []);

    return (
        <div className='mainContainer2'>
            <div className="titulo-gameboard">
                <h1>Game Board</h1>
            </div>
            <div className='nameForm2'>
            {jugadores.map((player: {nombre: string, puntaje: number, idPartida: string}, i:number) => (
                    <div className="player-name" key={i}>
                        <p>{player.nombre}: {player.puntaje}</p>
                        <p>Partida: {player.idPartida}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ranking;