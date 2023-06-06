import React from 'react';

function createBTN() {
    const buttons = []
    for (let i = 0; i < 63; i++) {
        buttons.push(<button key={i}>Button {i}</button>);
    }
    return buttons;
}  

const GameBoard = () => {
    const buttons = createBTN();

    return(
        <div className="gameboard-container">
            <div>
                <h1>Game Board</h1>
            </div>
            <div>
                    
            </div>
            <div>{buttons}</div>
            
        </div>
    );
}

export default GameBoard;