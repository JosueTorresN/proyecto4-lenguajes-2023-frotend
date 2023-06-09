import React from 'react';
import Home from './pages/Home';
import MenuPrincipal from './pages/MenuPrincipal';
import OpcionesJuego from './pages/OpcionesJuego';
import GameBoard from './pages/GameBoard';
import UnircePartida from './pages/UnircePartida';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Ranking from './pages/Ranking';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/game" >
            <Route path=":name/menu"  element={<MenuPrincipal />} />
            <Route path=":name/opciones-juego"  element={<OpcionesJuego />} />
            <Route path=":name/game-board"  element={<GameBoard />} />
            <Route path=":name/union-game"  element={<UnircePartida />} />
            <Route path=":name/ranking"  element={<Ranking />} />
            {/* <Route path=":name/game-board">
              <Route path=":room"  element={<GameBoard />} />
            </Route> */}
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
