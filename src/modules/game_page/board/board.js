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
    const [loserAlert, setLoserAlert] = useState('')
    const [draw, setDraw] = useState(0)
    // condicion ? accion1 : accion2 (if, else reducido)

    const handleClick1 = () => {
        setSymbol1(turn)
        const clonSymbol1 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled1(newTurn)
        const winnerA1A2A3 = clonSymbol1 === 'X' && symbol2 === 'X' && symbol3 === 'X'
        const winnerA1B1C1 = clonSymbol1 === 'X' && symbol4 === 'X' && symbol7 === 'X'
        const winnerA1B2C3 = clonSymbol1 === 'X' && symbol5 === 'X' && symbol9 === 'X'
        const winnerA1A2A3o = clonSymbol1 === 'O' && symbol2 === 'O' && symbol3 === 'O'
        const winnerA1B1C1o = clonSymbol1 === 'O' && symbol4 === 'O' && symbol7 === 'O'
        const winnerA1B2C3o = clonSymbol1 === 'O' && symbol5 === 'O' && symbol9 === 'O'
        if (winnerA1A2A3) {
            setWinnerAlert('Winner!')
        }
        if (winnerA1B1C1) {
            setWinnerAlert('Winner!')
        }
        if (winnerA1B2C3) {
            setWinnerAlert('Winner!')
        }
        if (winnerA1A2A3o) {
            setWinnerAlert('Winner!')
        }
        if (winnerA1B1C1o) {
            setWinnerAlert('Winner!')
        }
        if (winnerA1B2C3o) {
            setWinnerAlert('Winner!')
        }
    }
    const handleClick2 = () => {
        setSymbol2(turn)
        const clonSymbol2 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled2(newTurn)
        const winnerA2B2C2 = clonSymbol2 === 'X' && symbol5 === 'X' && symbol8 === 'X'
        const winnerA1A2A3 = symbol1 === 'X' && clonSymbol2 === 'X' && symbol3 === 'X'
        const winnerA2B2C2o = clonSymbol2 === 'O' && symbol5 === 'O' && symbol8 === 'O'
        const winnerA1A2A3o = symbol1 === 'O' && clonSymbol2 === 'O' && symbol3 === 'O'
        if (winnerA2B2C2) {
            setWinnerAlert('Winner!')
        }
        if (winnerA1A2A3) {
            setWinnerAlert('Winner!')
        }
        if (winnerA2B2C2o) {
            setWinnerAlert('Winner!')
        }
        if (winnerA1A2A3o) {
            setWinnerAlert('Winner!')
        }
    }
    const handleClick3 = () => {
        setSymbol3(turn)
        const clonSymbol3 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled3(newTurn)
        const winnerA1A2A3 = symbol1 === 'X' && symbol2 === 'X' && clonSymbol3 === 'X'
        const winnerA3B2C1 = clonSymbol3 === 'X' && symbol5 === 'X' && symbol7 === 'X'
        const winnerA3B3C3 = clonSymbol3 === 'X' && symbol6 === 'X' && symbol9 === 'X'
        const winnerA1A2A3o = symbol1 === 'O' && symbol2 === 'O' && clonSymbol3 === 'O'
        const winnerA3B2C1o = clonSymbol3 === 'O' && symbol5 === 'O' && symbol7 === 'O'
        const winnerA3B3C3o = clonSymbol3 === 'O' && symbol6 === 'O' && symbol9 === 'O'
        if (winnerA1A2A3) {
            setWinnerAlert('Winner!')
        }
        if (winnerA3B2C1) {
            setWinnerAlert('Winner!')
        }
        if (winnerA3B3C3) {
            setWinnerAlert('Winner!')
        }
        if (winnerA1A2A3o) {
            setWinnerAlert('Winner!')
        }
        if (winnerA3B2C1o) {
            setWinnerAlert('Winner!')
        }
        if (winnerA3B3C3o) {
            setWinnerAlert('Winner!')
        }
    }
    const handleClick4 = () => {
        setSymbol4(turn)
        const clonSymbol4 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled4(newTurn)
        const winnerB1B2B3 = clonSymbol4 === 'X' && symbol5 === 'X' && symbol6 === 'X'
        const winnerA1B1C1 = symbol1 === 'X' && clonSymbol4 === 'X' && symbol7 === 'X'
        const winnerB1B2B3o = clonSymbol4 === 'O' && symbol5 === 'O' && symbol6 === 'O'
        const winnerA1B1C1o = symbol1 === 'O' && clonSymbol4 === 'O' && symbol7 === 'O'
        if (winnerB1B2B3) {
            setWinnerAlert('Winner!')
        }
        if (winnerA1B1C1) {
            setWinnerAlert('Winner!')
        }
        if (winnerB1B2B3o) {
            setWinnerAlert('Winner!')
        }
        if (winnerA1B1C1o) {
            setWinnerAlert('Winner!')
        }
    }
    const handleClick5 = () => {
        setSymbol5(turn)
        const clonSymbol5 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled5(newTurn)
        const winnerB1B2B3 = symbol4 === 'X' && clonSymbol5 === 'X' && symbol6 === 'X'
        const winnerA2B2C2 = symbol2 === 'X' && clonSymbol5 === 'X' && symbol8 === 'X'
        const winnerA1B2C3 = symbol1 === 'X' && clonSymbol5 === 'X' && symbol9 === 'X'
        const winnerA3B2C1 = symbol3 === 'X' && clonSymbol5 === 'X' && symbol7 === 'X'
        const winnerB1B2B3o = symbol4 === 'O' && clonSymbol5 === 'O' && symbol6 === 'O'
        const winnerA2B2C2o = symbol2 === 'O' && clonSymbol5 === 'O' && symbol8 === 'O'
        const winnerA1B2C3o = symbol1 === 'O' && clonSymbol5 === 'O' && symbol9 === 'O'
        const winnerA3B2C1o = symbol3 === 'O' && clonSymbol5 === 'O' && symbol7 === 'O'
        if (winnerB1B2B3) {
            setWinnerAlert('Winner!')
        }
        if (winnerA2B2C2) {
            setWinnerAlert('Winner!')
        }
        if (winnerA1B2C3) {
            setWinnerAlert('Winner!')
        }
        if (winnerA3B2C1) {
            setWinnerAlert('Winner!')
        }
        if (winnerB1B2B3o) {
            setWinnerAlert('Winner!')
        }
        if (winnerA2B2C2o) {
            setWinnerAlert('Winner!')
        }
        if (winnerA1B2C3o) {
            setWinnerAlert('Winner!')
        }
        if (winnerA3B2C1o) {
            setWinnerAlert('Winner!')
        }
    }
    const handleClick6 = () => {
        setSymbol6(turn)
        const clonSymbol6 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled6(newTurn)
        const winnerB1B2B3 = symbol4 === 'X' && symbol5 === 'X' && clonSymbol6 === 'X'
        const winnerA3B3C3 = symbol3 === 'X' && clonSymbol6 === 'X' && symbol9 === 'X'
        const winnerB1B2B3o = symbol4 === 'O' && symbol5 === 'O' && clonSymbol6 === 'O'
        const winnerA3B3C3o = symbol3 === 'O' && clonSymbol6 === 'O' && symbol9 === 'O'
        if (winnerB1B2B3) {
            setWinnerAlert('Winner!')
        }
        if (winnerA3B3C3) {
            setWinnerAlert('Winner!')
        }
        if (winnerB1B2B3o) {
            setWinnerAlert('Winner!')
        }
        if (winnerA3B3C3o) {
            setWinnerAlert('Winner!')
        }
    }
    const handleClick7 = () => {
        setSymbol7(turn)
        const clonSymbol7 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled7(newTurn)
        const winnerC1C2C3 = clonSymbol7 === 'X' && symbol8 === 'X' && symbol9 === 'X'
        const winnerA1B1C1 = symbol1 === 'X' && symbol4 === 'X' && clonSymbol7 === 'X'
        const winnerA3B2C1 = symbol3 === 'X' && symbol5 === 'X' && clonSymbol7 === 'X'
        const winnerC1C2C3o = clonSymbol7 === 'O' && symbol8 === 'O' && symbol9 === 'O'
        const winnerA1B1C1o = symbol1 === 'O' && symbol4 === 'O' && clonSymbol7 === 'O'
        const winnerA3B2C1o = symbol3 === 'O' && symbol5 === 'O' && clonSymbol7 === 'O'
        if (winnerC1C2C3) {
            setWinnerAlert('Winner!')
        }
        if (winnerA1B1C1) {
            setWinnerAlert('Winner!')
        }
        if (winnerA3B2C1) {
            setWinnerAlert('Winner!')
        }
        if (winnerC1C2C3o) {
            setWinnerAlert('Winner!')
        }
        if (winnerA1B1C1o) {
            setWinnerAlert('Winner!')
        }
        if (winnerA3B2C1o) {
            setWinnerAlert('Winner!')
        }
    }
    const handleClick8 = () => {
        setSymbol8(turn)
        const clonSymbol8 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled8(newTurn)
        const winnerC1C2C3 = symbol7 === 'X' && clonSymbol8 === 'X' && symbol9 === 'X'
        const winnerA2B2C2 = symbol2 === 'X' && symbol5 === 'X' && clonSymbol8 === 'X'
        const winnerC1C2C3o = symbol7 === 'O' && clonSymbol8 === 'O' && symbol9 === 'O'
        const winnerA2B2C2o = symbol2 === 'O' && symbol5 === 'O' && clonSymbol8 === 'O'
        if (winnerC1C2C3) {
            setWinnerAlert('Winner!')
        }
        if (winnerA2B2C2) {
            setWinnerAlert('Winner!')
        }
        if (winnerC1C2C3o) {
            setWinnerAlert('Winner!')
        }
        if (winnerA2B2C2o) {
            setWinnerAlert('Winner!')
        }
    }
    const handleClick9 = () => {
        setSymbol9(turn)
        const clonSymbol9 = turn
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled9(newTurn)
        const winnerC1C2C3 = symbol7 === 'X' && symbol8 === 'X' && clonSymbol9 === 'X'
        const winnerA3B3C3 = symbol3 === 'X' && symbol6 === 'X' && clonSymbol9 === 'X'
        const winnerA1B2C3 = symbol1 === 'X' && symbol5 === 'X' && clonSymbol9 === 'X'
        const winnerC1C2C3o = symbol7 === 'O' && symbol8 === 'O' && clonSymbol9 === 'O'
        const winnerA3B3C3o = symbol3 === 'O' && symbol6 === 'O' && clonSymbol9 === 'O'
        const winnerA1B2C3o = symbol1 === 'O' && symbol5 === 'O' && clonSymbol9 === 'O'
        if (winnerC1C2C3) {
            setWinnerAlert('Winner!')
        }
        if (winnerA3B3C3) {
            setWinnerAlert('Winner!')
        }
        if (winnerA1B2C3) {
            setWinnerAlert('Winner!')
        }
        if (winnerC1C2C3o) {
            setWinnerAlert('Winner!')
        }
        if (winnerA3B3C3o) {
            setWinnerAlert('Winner!')
        }
        if (winnerA1B2C3o) {
            setWinnerAlert('Winner!')
        }
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
                <p className='font-family-ttt game-font-color'>Player one: {store.playerOne.name}</p>
                <p className='font-family-ttt game-font-color'>Symbol selected: {store.playerOne.symbolSelected}</p>
                <h4 className='font-family-ttt game-font-color'>{winnerAlert}</h4>
                <h4 className='font-family-ttt game-font-color'>{loserAlert}</h4>
                <hr />
                <p className='font-family-ttt game-font-color'>Player two: {store.playerTwo.name}</p>
                <p className='font-family-ttt game-font-color'>Symbol selected: {store.playerTwo.symbolSelected}</p>
                <h4 className='font-family-ttt game-font-color'>{winnerAlert}</h4>
                <h4 className='font-family-ttt game-font-color'>{loserAlert}</h4>
                <hr />
                <p className='font-family-ttt game-font-color'>Draw: {draw}</p>
            </div>
        </div>

    )
}

export default Board