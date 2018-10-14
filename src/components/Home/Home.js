import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Search from '../Search/Search'

class Home extends Component {

    constructor(){
        super()
        this.state = {
            data: ''
        }
    }

    render(){

        return(
            <div className="fullpage">
                <nav className="topnav">
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
                <Link to="/events">Events</Link>
                </nav>
                <div className="search">
                <Search />
                </div>
                

            </div>


        )
    }
}

export default Home