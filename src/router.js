import React from 'react'
import { Switch, Route } from 'react-router-dom'
import injectContext from './store/appContext'

import MainView from './modules/main_page/pages/index'
import GameView from './modules/game_page/pages/index'
import WinView from './modules/win_page/pages/index'


function Router() {
    return (
        <div className='container'>
            <Switch>

                <Route exact path='/'>
                    <MainView />
                </Route>

                <Route exact path='/game-view'>
                    <GameView />
                </Route>

                <Route exact path='/win-view'>
                    <WinView />
                </Route>

            </Switch>
        </div>
    )
}

export default injectContext(Router)