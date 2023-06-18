import React from "react";
import socket from "../Conecciones.js";
import { Navigate, useParams } from "react-router-dom";

socket.on('connect', () => {
    console.log('Connected to server');
});


const OpcionesJuego = () => {
    const [tipo, setTipo] = React.useState('VS');
    const [tematica, setTematica] = React.useState('estandar');
    const [nombre, setNombre] = React.useState('');
    const [pass, setPass] = React.useState(false);
    const { name } = useParams();

    const enviarDatos = () => {
        socket.emit('createParty', {
            nombre: nombre,
            nombreJugador: name,
        });
    }

    function handleChangeNombre(event: any) {
        setNombre(event.target.value);
    }

    function handleChangeTipo(event: any) {
        setTipo(event.target.value);
    }

    function handleChangeTematica(event: any) {
        setTematica(event.target.value);
      }
    
    React.useEffect(() => {
        socket.on('unionParty', (data: any) => {
            console.log(data);
            setPass(data);
        });

        // return () => {
        //     socket.off('unionParty');
        // }
    }, []);

  
    return (
        <div className='mainContainer2'>
            <div>
            {pass && (
            <Navigate to={`/game/${name}/game-board`} replace={true} />
            // <Navigate to={`/game/${name}/game-board/room1`} replace={true} />
            )}
            </div>
            <h1 className="tituloPagina">Opciones de juego</h1>
            <form className='datosForm' onSubmit={enviarDatos}>
                <div className="input-group">
                    <input type="text" placeholder=" " value={nombre} onChange={handleChangeNombre} />
                    <label className='lbl-nombre'> <span className="text-nomb">Nombre de la sala</span> </label>
                </div>
                <div className="input-group">
                    <select value={tipo} onChange={handleChangeTipo} className="selectTipo">
                        <option value="VS">VS con tiempo</option>
                        <option value="Puntaje">Puntaje</option>
                    </select>
                    {/* <label htmlFor="selectTipo">Tipo</label> */}
                </div>
                <div className="input-group">
                    <select value={tematica} onChange={handleChangeTematica} className="selectTematica">
                        <option value="estandar">Estandar</option>
                        <option value="tres">Tres jugadores</option>
                    </select>
                    {/* <label htmlFor="selectTematica">Tematica</label> */}
                </div>
                <div className='btnContainer'>
                    <button className="btn">
                        <span>aceptar</span>
                        <div className="dot"></div>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default OpcionesJuego;