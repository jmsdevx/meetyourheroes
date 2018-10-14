import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Authorlist from './Authorlist'

class Favorites extends Component {


    render(){

        return(
            <div>


                <nav className="compnav">
                <Link to="/Favorites">Favorites</Link>
                <Link to="/">Home</Link>
                </nav>
                
                <div className="authorlist">
                <Authorlist />
                
                </div>

                


            </div>


        )
    }
}

export default Favorites