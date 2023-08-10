import React, { useState } from 'react'
import styles from "../styles/game.module.css"
import Board from './Board'

function Game() {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];


    const handlePlay = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    const resetGame = () => {
        setCurrentMove(0)
    }

    return (
        <div className={styles.mainContainer}>
            <h1>TIC-TAC-TOE</h1>
            <div className={styles.gameContainer}>
                <div className={styles.gameBoard}>
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                </div>
                <div className={styles.gameInfo}>
                    <button onClick={resetGame}>Reset Game</button>
                </div>
            </div>
        </div >
    )
}

export default Game
