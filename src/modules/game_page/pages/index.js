import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../../store/appContext'

function GameView() {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='div-main-view container'>
                <div className="border-row">
                    <button type="button" className="btn btn-outline-danger">XO</button>
                    <button type="button" className="btn btn-outline-danger">XO</button>
                    <button type="button" className="btn btn-outline-danger">XO</button>
                </div>
                <div className="border-row">
                    <button type="button" className="btn btn-outline-danger">XO</button>
                    <button type="button" className="btn btn-outline-danger">XO</button>
                    <button type="button" className="btn btn-outline-danger">XO</button>
                </div>
                <div className="border-row">
                    <button type="button" className="btn btn-outline-danger">XO</button>
                    <button type="button" className="btn btn-outline-danger">XO</button>
                    <button type="button" className="btn btn-outline-danger">XO</button>
                </div>
                <hr/>
                <h5>Player one</h5>
                <p>Won:</p>
                <p>Losses:</p>

                <h5>Player two</h5>
                <p>Won:</p>
                <p>Losses:</p>

                <Link to='/win-view'>
                <button>Win View</button>
                </Link>
            </div>
        </div>
    )
}

export default GameView