import React from 'react'

import {Switch, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import Favorites from './components/Favorites/Favorites'
import Authorlist from './components/Favorites/Authorlist'
import Events from './components/Events/Events'
import Mapping from './components/Events/Mapping'
import Info from './components/Search/Info'

export default (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/favorites" component={Favorites}/>
        <Route path="/favorites/:id" component={Authorlist} />
        <Route path="/events" component={Events} />
        <Route path="/events/map" component={Mapping} />
        <Route path="/author/:id" component={Info} />
    </Switch>
)



