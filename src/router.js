import React from 'react'
import { Switch, Route } from 'react-router-dom'
import injectContext from './store/appContext'

import MainView from './modules/main_page/pages/index'


function Router() {
    return (
        <div className='container'>
            <Switch>

                <Route exact path='/'>
                    <MainView />
                </Route>

                
            </Switch>
        </div>
    )
}

export default injectContext(Router)