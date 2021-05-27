import React, { useContext } from 'react'
import Context from '../../../store/appContext'

function MainView() {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='div-main-view'>
                <div className='text-center'>
                    <h2 className='mb-3 font-family-ttt title-font-color'>Tic tac toe!</h2>
                </div>
                <div>
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Player one" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" />
                            <div className="input-group-append" id="button-addon4">
                                <button className="btn btn-outline-secondary" type="button">
                                    <i class="fas fa-times" />
                                </button>
                                <button className="btn btn-outline-secondary" type="button">
                                    <i class="fas fa-circle-notch" />
                                </button>
                            </div>
                        </div>
                        <div className="input-group mt-3">
                            <input type="text" className="form-control" placeholder="Player two" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" />
                            <div className="input-group-append" id="button-addon4">
                                <button className="btn btn-outline-secondary" type="button">
                                    <i class="fas fa-times" />
                                </button>
                                <button className="btn btn-outline-secondary" type="button">
                                    <i class="fas fa-circle-notch" />
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-3">Start!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MainView