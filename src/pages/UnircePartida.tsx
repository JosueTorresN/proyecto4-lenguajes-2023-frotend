import React from 'react';
import socket from "../Conecciones.js";
import { Navigate } from "react-router-dom";

const UnircePartida = () => {
    const [nombre, setNombre] = React.useState('');
    const [pass, setPass] = React.useState(false);

    const enviarDatos = () => {
        socket.emit('unionParty', {nombre: 'Juan', roomName: nombre});
        setPass(true);
    }

    function handleChangeNombre(event: any) {
        setNombre(event.target.value);
    }

    React.useEffect(() => {
        socket.on('unionParty', (data: any) => {
            console.log(data);
        });

        // return () => {
        //     socket.off('unionParty');
        // }
    }, []);

    return (
        <div className='mainContainer2'>
            <div>
            {pass && (
            <Navigate to="/game-board" replace={true} />
            )}
            </div>
            <h1 className="tituloPagina">Opciones de juego</h1>
            <form className='datosForm' onSubmit={enviarDatos}>
                <div className="input-group">
                    <input type="text" placeholder=" " value={nombre} onChange={handleChangeNombre} />
                    <label className='lbl-nombre'> <span className="text-nomb">Nombre de la sala</span> </label>
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

export default UnircePartida;