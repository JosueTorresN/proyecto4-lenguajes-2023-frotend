import React from 'react';
import Home from './pages/Home';
import MenuPrincipal from './pages/MenuPrincipal';
import OpcionesJuego from './pages/OpcionesJuego';
import GameBoard from './pages/GameBoard';
import UnircePartida from './pages/UnircePartida';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/menu"  element={<MenuPrincipal />} />
          <Route path="/opciones-juego"  element={<OpcionesJuego />} />
          <Route path="/game-board"  element={<GameBoard />} />
          <Route path="/union-game"  element={<UnircePartida />} />
          {/* <Route path="/about" component={About} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
