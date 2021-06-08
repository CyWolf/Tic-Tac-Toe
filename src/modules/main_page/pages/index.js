import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Context } from '../../../store/appContext'


function MainView() {
    const { store, actions } = useContext(Context)
    const [errorMessage, setErrorMessage] = useState('')
    const history = useHistory()

    const symbolPlayerOneX = store.playerOne.symbolSelected === 'X' ? 'symbol-color' : ''
    const symbolPlayerOneO = store.playerOne.symbolSelected === 'O' ? 'symbol-color' : ''
    const symbolPlayerTwoX = store.playerTwo.symbolSelected === 'X' ? 'symbol-color' : ''
    const symbolPlayerTwoO = store.playerTwo.symbolSelected === 'O' ? 'symbol-color' : ''

    const handleSubmit = (e) => {
        e.preventDefault()

        const playersValue =
            store.playerOne.name === '' ||
            store.playerOne.symbolSelected === '' ||
            store.playerTwo.name === '' ||
            store.playerTwo.symbolSelected === ''

        if (playersValue) {
            setErrorMessage(`Please, complete all fields before proceeding`)
        } else {
            history.push('/game-view')
        }
    }


    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='div-main-view'>
                <div className='text-center'>
                    <h2 className='mb-3 font-family-ttt title-font-color'>Tic tac toe!</h2>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input name='playerOne' type="text" className="form-control font-family-ttt border-input" placeholder="Player one" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" onChange={actions.handleChange} value={store.playerOne.name} />
                            <div className="input-group-append" id="button-addon4">
                                <button className="btn btn-outline-secondary font-family-ttt border-input symbol_selected_button_size" type="button" onClick={() => actions.selectedSymbol('X')}>
                                    <span className={symbolPlayerOneX}>X</span>
                                </button>
                                <button className="btn btn-outline-secondary font-family-ttt border-input symbol_selected_button_size" type="button" onClick={() => actions.selectedSymbol('O')}>
                                    <span className={symbolPlayerOneO}>O</span>
                                </button>
                            </div>
                        </div>
                        <div className="input-group mt-3">
                            <input name='playerTwo' type="text" className="form-control font-family-ttt border-input" placeholder="Player two" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" onChange={actions.handleChange} value={store.playerTwo.name} />
                            <div className="input-group-append" id="button-addon4">
                                <button className="btn btn-outline-secondary font-family-ttt border-input symbol_selected_button_size" type="button" onClick={() => actions.selectedSymbol('O')}>
                                    <span className={symbolPlayerTwoX}>X</span>
                                </button>
                                <button className="btn btn-outline-secondary font-family-ttt border-input symbol_selected_button_size" type="button" onClick={() => actions.selectedSymbol('X')}>
                                    <span className={symbolPlayerTwoO}>O</span>
                                </button>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary font-family-ttt border-input w-100 mt-3">Start!</button>
                        <p className='font-family-ttt game-font-color mt-3 text-center'>{errorMessage}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MainView