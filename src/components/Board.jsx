import React from 'react'
import Box from './Box'

function Board({ boxes, onClick }) {

    function handleButtonClick() {
        console.log("hey")
    }

    return (
        <div>
            <Box value={1} onClick={handleButtonClick} />
            <Box value={2} onClick={handleButtonClick} />
            <Box value={3} onClick={handleButtonClick} />
            <Box value={4} onClick={handleButtonClick} />
            <Box value={5} onClick={handleButtonClick} />
            <Box value={6} onClick={handleButtonClick} />
            <Box value={7} onClick={handleButtonClick} />
            <Box value={8} onClick={handleButtonClick} />
            <Box value={9} onClick={handleButtonClick} />


        </div>
    )
}

export default Board
