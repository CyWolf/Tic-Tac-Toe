import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../store/appContext'


function MainView() {
    const {store, actions} = useContext(Context)

    //pista: const symbolSelected = 'symbol-color'
    const symbolPlayerOneX = store.playerOne.symbolSelected === 'x'? 'symbol-color' : ''
    const symbolPlayerOneO = store.playerOne.symbolSelected === 'o'? 'symbol-color' : ''
    const symbolPlayerTwoX = store.playerTwo.symbolSelected === 'x'? 'symbol-color' : ''
    const symbolPlayerTwoO = store.playerTwo.symbolSelected === 'o'? 'symbol-color' : ''
    
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='div-main-view'>
                <div className='text-center'>
                    <h2 className='mb-3 font-family-ttt title-font-color'>Tic tac toe!</h2>
                </div>
                <div>
                    <form>
                        <div className="input-group">
                            <input name='playerOne' type="text" className="form-control" placeholder="Player one" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" onChange={actions.handleChange} value={store.playerOne.name}/>
                            <div className="input-group-append" id="button-addon4">
                                <button className="btn btn-outline-secondary" type="button" onClick={() => actions.selectedSymbol('x')}>
                                    <i className={`fas fa-times ${symbolPlayerOneX}`} />
                                </button>
                                <button className="btn btn-outline-secondary" type="button" onClick={() => actions.selectedSymbol('o')}>
                                    <i className={`fas fa-circle-notch ${symbolPlayerOneO}`} />
                                </button>
                            </div>
                        </div>
                        <div className="input-group mt-3">
                            <input name='playerTwo' type="text" className="form-control" placeholder="Player two" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" onChange={actions.handleChange} value={store.playerTwo.name}/>
                            <div className="input-group-append" id="button-addon4">
                                <button className="btn btn-outline-secondary" type="button" onClick={() => actions.selectedSymbol('o')}>
                                    <i className={`fas fa-times ${symbolPlayerTwoX}`} />
                                </button>
                                <button className="btn btn-outline-secondary" type="button" onClick={() => actions.selectedSymbol('x')}>
                                    <i className={`fas fa-circle-notch ${symbolPlayerTwoO}`} />
                                </button>
                            </div>
                        </div>
                        <Link to='/game-view'>
                        <button type="submit" className="btn btn-primary w-100 mt-3">Start!</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MainView