import React, { useContext, useState } from 'react'
import { Context } from '../../../store/appContext'
import './board.css'
import '../Square/squares.css'

const Board = () => {
    const { store, actions } = useContext(Context)
    const [turn, setTurn] = useState('X')
    const [symbol1, setSymbol1] = useState('')
    const [symbol2, setSymbol2] = useState('')
    const [symbol3, setSymbol3] = useState('')
    const [symbol4, setSymbol4] = useState('')
    const [symbol5, setSymbol5] = useState('')
    const [symbol6, setSymbol6] = useState('')
    const [symbol7, setSymbol7] = useState('')
    const [symbol8, setSymbol8] = useState('')
    const [symbol9, setSymbol9] = useState('')
    const [disabled1, setDisabled1] = useState('')
    const [disabled2, setDisabled2] = useState('')
    const [disabled3, setDisabled3] = useState('')
    const [disabled4, setDisabled4] = useState('')
    const [disabled5, setDisabled5] = useState('')
    const [disabled6, setDisabled6] = useState('')
    const [disabled7, setDisabled7] = useState('')
    const [disabled8, setDisabled8] = useState('')
    const [disabled9, setDisabled9] = useState('')
    const [winnerAlert, setWinnerAlert] = useState('')
    const [winCount1, setWinCount1] = useState(0)
    const [winCount2, setWinCount2] = useState(0)
    const [drawCount, setDrawCount] = useState(0)
    const draw = symbol1 && symbol2 && symbol3 && symbol4 && symbol5 && symbol6 && symbol7 && symbol8 && symbol9
    const winner = turn === store.playerOne.symbolSelected
    // condicion ? accion1 : accion2 (if, else reducido)

    const handleClick1 = () => {
        setSymbol1(turn)
        const clonSymbol1 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        const winnerA1A2A3 = clonSymbol1 === 'X' && symbol2 === 'X' && symbol3 === 'X'
        const winnerA1B1C1 = clonSymbol1 === 'X' && symbol4 === 'X' && symbol7 === 'X'
        const winnerA1B2C3 = clonSymbol1 === 'X' && symbol5 === 'X' && symbol9 === 'X'
        const winnerA1A2A3o = clonSymbol1 === 'O' && symbol2 === 'O' && symbol3 === 'O'
        const winnerA1B1C1o = clonSymbol1 === 'O' && symbol4 === 'O' && symbol7 === 'O'
        const winnerA1B2C3o = clonSymbol1 === 'O' && symbol5 === 'O' && symbol9 === 'O'
        if (winnerA1A2A3) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA1B1C1) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA1B2C3) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA1A2A3o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA1B1C1o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA1B2C3o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (draw) {
            
        }
        setTurn(newTurn)
        setDisabled1(newTurn)
    }
    const handleClick2 = () => {
        setSymbol2(turn)
        const clonSymbol2 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        const winnerA2B2C2 = clonSymbol2 === 'X' && symbol5 === 'X' && symbol8 === 'X'
        const winnerA1A2A3 = symbol1 === 'X' && clonSymbol2 === 'X' && symbol3 === 'X'
        const winnerA2B2C2o = clonSymbol2 === 'O' && symbol5 === 'O' && symbol8 === 'O'
        const winnerA1A2A3o = symbol1 === 'O' && clonSymbol2 === 'O' && symbol3 === 'O'
        if (winnerA2B2C2) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA1A2A3) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA2B2C2o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA1A2A3o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        setTurn(newTurn)
        setDisabled2(newTurn)
    }
    const handleClick3 = () => {
        setSymbol3(turn)
        const clonSymbol3 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        const winnerA1A2A3 = symbol1 === 'X' && symbol2 === 'X' && clonSymbol3 === 'X'
        const winnerA3B2C1 = clonSymbol3 === 'X' && symbol5 === 'X' && symbol7 === 'X'
        const winnerA3B3C3 = clonSymbol3 === 'X' && symbol6 === 'X' && symbol9 === 'X'
        const winnerA1A2A3o = symbol1 === 'O' && symbol2 === 'O' && clonSymbol3 === 'O'
        const winnerA3B2C1o = clonSymbol3 === 'O' && symbol5 === 'O' && symbol7 === 'O'
        const winnerA3B3C3o = clonSymbol3 === 'O' && symbol6 === 'O' && symbol9 === 'O'
        if (winnerA1A2A3) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA3B2C1) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA3B3C3) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA1A2A3o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA3B2C1o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA3B3C3o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        setTurn(newTurn)
        setDisabled3(newTurn)
    }
    const handleClick4 = () => {
        setSymbol4(turn)
        const clonSymbol4 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        const winnerB1B2B3 = clonSymbol4 === 'X' && symbol5 === 'X' && symbol6 === 'X'
        const winnerA1B1C1 = symbol1 === 'X' && clonSymbol4 === 'X' && symbol7 === 'X'
        const winnerB1B2B3o = clonSymbol4 === 'O' && symbol5 === 'O' && symbol6 === 'O'
        const winnerA1B1C1o = symbol1 === 'O' && clonSymbol4 === 'O' && symbol7 === 'O'
        if (winnerB1B2B3) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA1B1C1) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerB1B2B3o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA1B1C1o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        setTurn(newTurn)
        setDisabled4(newTurn)
    }
    const handleClick5 = () => {
        setSymbol5(turn)
        const clonSymbol5 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        const winnerB1B2B3 = symbol4 === 'X' && clonSymbol5 === 'X' && symbol6 === 'X'
        const winnerA2B2C2 = symbol2 === 'X' && clonSymbol5 === 'X' && symbol8 === 'X'
        const winnerA1B2C3 = symbol1 === 'X' && clonSymbol5 === 'X' && symbol9 === 'X'
        const winnerA3B2C1 = symbol3 === 'X' && clonSymbol5 === 'X' && symbol7 === 'X'
        const winnerB1B2B3o = symbol4 === 'O' && clonSymbol5 === 'O' && symbol6 === 'O'
        const winnerA2B2C2o = symbol2 === 'O' && clonSymbol5 === 'O' && symbol8 === 'O'
        const winnerA1B2C3o = symbol1 === 'O' && clonSymbol5 === 'O' && symbol9 === 'O'
        const winnerA3B2C1o = symbol3 === 'O' && clonSymbol5 === 'O' && symbol7 === 'O'
        if (winnerB1B2B3) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA2B2C2) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA1B2C3) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA3B2C1) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerB1B2B3o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA2B2C2o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA1B2C3o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA3B2C1o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        setTurn(newTurn)
        setDisabled5(newTurn)
    }
    const handleClick6 = () => {
        setSymbol6(turn)
        const clonSymbol6 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        const winnerB1B2B3 = symbol4 === 'X' && symbol5 === 'X' && clonSymbol6 === 'X'
        const winnerA3B3C3 = symbol3 === 'X' && clonSymbol6 === 'X' && symbol9 === 'X'
        const winnerB1B2B3o = symbol4 === 'O' && symbol5 === 'O' && clonSymbol6 === 'O'
        const winnerA3B3C3o = symbol3 === 'O' && clonSymbol6 === 'O' && symbol9 === 'O'
        if (winnerB1B2B3) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA3B3C3) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerB1B2B3o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA3B3C3o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        setTurn(newTurn)
        setDisabled6(newTurn)
    }
    const handleClick7 = () => {
        setSymbol7(turn)
        const clonSymbol7 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        const winnerC1C2C3 = clonSymbol7 === 'X' && symbol8 === 'X' && symbol9 === 'X'
        const winnerA1B1C1 = symbol1 === 'X' && symbol4 === 'X' && clonSymbol7 === 'X'
        const winnerA3B2C1 = symbol3 === 'X' && symbol5 === 'X' && clonSymbol7 === 'X'
        const winnerC1C2C3o = clonSymbol7 === 'O' && symbol8 === 'O' && symbol9 === 'O'
        const winnerA1B1C1o = symbol1 === 'O' && symbol4 === 'O' && clonSymbol7 === 'O'
        const winnerA3B2C1o = symbol3 === 'O' && symbol5 === 'O' && clonSymbol7 === 'O'
        if (winnerC1C2C3) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA1B1C1) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA3B2C1) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerC1C2C3o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA1B1C1o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA3B2C1o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        setTurn(newTurn)
        setDisabled7(newTurn)
    }
    const handleClick8 = () => {
        setSymbol8(turn)
        const clonSymbol8 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        const winnerC1C2C3 = symbol7 === 'X' && clonSymbol8 === 'X' && symbol9 === 'X'
        const winnerA2B2C2 = symbol2 === 'X' && symbol5 === 'X' && clonSymbol8 === 'X'
        const winnerC1C2C3o = symbol7 === 'O' && clonSymbol8 === 'O' && symbol9 === 'O'
        const winnerA2B2C2o = symbol2 === 'O' && symbol5 === 'O' && clonSymbol8 === 'O'
        if (winnerC1C2C3) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA2B2C2) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerC1C2C3o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA2B2C2o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        setTurn(newTurn)
        setDisabled8(newTurn)
    }
    const handleClick9 = () => {
        setSymbol9(turn)
        const clonSymbol9 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        const winnerC1C2C3 = symbol7 === 'X' && symbol8 === 'X' && clonSymbol9 === 'X'
        const winnerA3B3C3 = symbol3 === 'X' && symbol6 === 'X' && clonSymbol9 === 'X'
        const winnerA1B2C3 = symbol1 === 'X' && symbol5 === 'X' && clonSymbol9 === 'X'
        const winnerC1C2C3o = symbol7 === 'O' && symbol8 === 'O' && clonSymbol9 === 'O'
        const winnerA3B3C3o = symbol3 === 'O' && symbol6 === 'O' && clonSymbol9 === 'O'
        const winnerA1B2C3o = symbol1 === 'O' && symbol5 === 'O' && clonSymbol9 === 'O'
        if (winnerC1C2C3) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA3B3C3) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA1B2C3) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerC1C2C3o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA3B3C3o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        if (winnerA1B2C3o) {
            if (winner) {
                setWinnerAlert(`Winner is: ${store.playerOne.name}!`)
            } else {
                setWinnerAlert(`Winner is: ${store.playerTwo.name}!`)
            }
        }
        setTurn(newTurn)
        setDisabled9(newTurn)
    }

    return (
        <div>
            <div className='d-flex'>
                <button type="button" disabled={disabled1} className="btn btn-dark font-family-ttt square square-font-size pl-3 pt-4" onClick={handleClick1}>{symbol1}</button>
                <button type="button" disabled={disabled2} className="btn btn-dark font-family-ttt square square-font-size pl-3 pt-4" onClick={handleClick2}>{symbol2}</button>
                <button type="button" disabled={disabled3} className="btn btn-dark font-family-ttt square square-font-size pl-3 pt-4" onClick={handleClick3}>{symbol3}</button>
            </div>
            <div className='d-flex'>
                <button type="button" disabled={disabled4} className="btn btn-dark font-family-ttt square square-font-size pl-3 pt-4" onClick={handleClick4}>{symbol4}</button>
                <button type="button" disabled={disabled5} className="btn btn-dark font-family-ttt square square-font-size pl-3 pt-4" onClick={handleClick5}>{symbol5}</button>
                <button type="button" disabled={disabled6} className="btn btn-dark font-family-ttt square square-font-size pl-3 pt-4" onClick={handleClick6}>{symbol6}</button>
            </div>
            <div className='d-flex'>
                <button type="button" disabled={disabled7} className="btn btn-dark font-family-ttt square square-font-size pl-3 pt-4" onClick={handleClick7}>{symbol7}</button>
                <button type="button" disabled={disabled8} className="btn btn-dark font-family-ttt square square-font-size pl-3 pt-4" onClick={handleClick8}>{symbol8}</button>
                <button type="button" disabled={disabled9} className="btn btn-dark font-family-ttt square square-font-size pl-3 pt-4" onClick={handleClick9}>{symbol9}</button>
            </div>

            <div>
                <hr />
                <h4 className='font-family-ttt game-font-color text-center'>{winnerAlert}</h4>
                {draw && <h4 className='font-family-ttt game-font-color text-center'>Draw!</h4>}
                <hr />
                <p className='font-family-ttt game-font-color text-center'>Player one: {store.playerOne.name}</p>
                <p className='font-family-ttt game-font-color text-center'>Score: {winCount1}</p>
                <p className='font-family-ttt game-font-color text-center'>Player two: {store.playerTwo.name}</p>
                <p className='font-family-ttt game-font-color text-center'>Score: {winCount2}</p>
                <hr />
                <p className='font-family-ttt game-font-color text-center'>Draw: {drawCount}</p>
            </div>
        </div>

    )
}

export default Board