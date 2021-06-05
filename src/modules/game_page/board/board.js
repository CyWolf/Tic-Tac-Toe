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
    const [draw, setDraw] = useState(0)
    // condicion ? accion1 : accion2 (if, else reducido)

    const handleClick1 = () => {
        setSymbol1(turn)
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled1(newTurn)
    }
    const handleClick2 = () => {
        setSymbol2(turn)
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled2(newTurn)
    }
    const handleClick3 = () => {
        setSymbol3(turn)
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled3(newTurn)
    }
    const handleClick4 = () => {
        setSymbol4(turn)
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled4(newTurn)
    }
    const handleClick5 = () => {
        setSymbol5(turn)
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled5(newTurn)
    }
    const handleClick6 = () => {
        setSymbol6(turn)
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled6(newTurn)
    }
    const handleClick7 = () => {
        setSymbol7(turn)
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled7(newTurn)
    }
    const handleClick8 = () => {
        setSymbol8(turn)
        const newTurn = turn === 'X' ? 'O' : 'X'
        setTurn(newTurn)
        setDisabled8(newTurn)
    }
    const handleClick9 = () => {
        setSymbol9(turn)
        const newTurn = turn === 'X' ? 'O' : 'X'
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
                <p className='font-family-ttt game-font-color'>Player one: {store.playerOne.name}</p>
                <p className='font-family-ttt game-font-color'>Symbol selected: {store.playerOne.symbolSelected}</p>
                <hr />
                <p className='font-family-ttt game-font-color'>Player two: {store.playerTwo.name}</p>
                <p className='font-family-ttt game-font-color'>Symbol selected: {store.playerTwo.symbolSelected}</p>
                <hr />
                <p className='font-family-ttt game-font-color'>Draw: {draw}</p>
            </div>
        </div>

    )
}

export default Board

// console.log(squares)
    // const createSquares = (values) => (
    //     values.map(value => (
    //         <Square
    //             value={squares[value]}
    //             key={`square_${value}`}
    //         />
    //     ))
    // )

// <div className='board'>
        //     <div className='row'>
        //         {createSquares([0, 1, 2])}
        //     </div>
        //     <div className='row'>
        //         {createSquares([3, 4, 5])}
        //     </div>
        //     <div className='row'>
        //         {createSquares([6, 7, 8])}
        //     </div>
        // </div>
