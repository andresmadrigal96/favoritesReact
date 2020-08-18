import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../pages/Main.js'
import NotFound from '../pages/NotFound'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/main" component={Main} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App