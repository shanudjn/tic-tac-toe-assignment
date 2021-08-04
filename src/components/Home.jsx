import React from 'react'
import Board from './Board'

function Home() {

    function handleClick() {

    }

    return (
        <div>
            <h2>Tic Tac Toe</h2>
            <Board onClick={handleClick} />
        </div>
    )
}

export default Home
