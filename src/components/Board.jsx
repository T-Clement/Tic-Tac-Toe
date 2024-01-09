import { useState } from "react";
import Square from "./Square"
import calculateWinner from "../utils/calculateWinner";
import resetBoard from "../utils/resetBoard";
import TableScore from "./TableScore";

function Board({scoreO, scoreX, setScoreO, setScoreX}) {
    // STATES
    // initialize array of state foreach square
    const startGamePositions = [];
    for (let i = 0; i < 9; i++) {
        startGamePositions.push(null);
    }
    const [squares, setSquares] = useState(startGamePositions);
    const [xIsNext, setXisNext] = useState(true);
    




    const winner = calculateWinner(squares);


    let status;
    if(winner) {
        status = "Winner: " + winner;
    } else if (!squares.includes(null)) {
        status = "It's a Draw ! Try again";
    } else {
        status = "Next Player is : " + (xIsNext ? "X" : "O");
    }


    // COMPORTEMENTS
    const handleClick = (index) => {

        // handle case if already value in square or winner
        if(squares[index] || calculateWinner(squares)) return;

        // copy of the squares state
        const squaresCopy = [...squares];
        if(xIsNext) {
            squaresCopy[index] = "X"
        } else {
            squaresCopy[index] = "O"
        }
        // update states
        setSquares(squaresCopy);
        setXisNext(!xIsNext);

        // 
        if(calculateWinner(squaresCopy)) {
            calculateWinner(squaresCopy) == "X" ? setScoreX(scoreX + 1) : setScoreO(scoreO + 1);
        }
    }


    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value = {squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value = {squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value = {squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value = {squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value = {squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value = {squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value = {squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value = {squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value = {squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
            
            <button 
                style={{marginTop : "20px", marginBottom: "20px"}} 
                onClick={() => resetBoard(setSquares, setXisNext)}
            >
                Relancer une partie
            </button>

            
        </>
        )
}

export default Board