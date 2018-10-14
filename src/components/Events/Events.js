import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Mapping from './Mapping'
import Eventslist from './Eventslist'

class Events extends Component {

    render(){

        return(
            <div>
                <nav className="compnav">
                <Link to="/events">Events</Link>
                <Link to="/">Home</Link>
                </nav>

                <div className="eventslist">
                <Eventslist /> 
                </div>

                <div className="map">
                <Mapping />
                
                </div>


            </div>


        )
    }
}

export default Events