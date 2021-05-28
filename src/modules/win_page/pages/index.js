import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../../store/appContext'

function WinView() {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='div-main-view'>
                <h1>You Win!</h1>
                <Link to='game-view'>
                <button>Play again</button>
                </Link>
                <Link to='/'>
                <button>Exit (coward)</button>
                </Link>
            </div>
        </div>
    )
}

export default WinView