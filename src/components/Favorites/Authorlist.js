import React, {Component} from 'react'
import axios from 'axios'

class Authorlist extends Component {

    constructor(){
        super();
        this.state = {
            favorites: []
        }
    }

    componentDidMount(){
        this.getFavorites()
    }

    getFavorites(){
        axios.get('http://localhost:3001/api/favorites')
        .then(response => {
            console.log(response.data)
            this.setState({favorites: response.data})
            console.log(this.state.favorites)
        })
        .catch(error=>console.log(error))
        
    }

    render(){

        let display = this.state.favorites.map((e, i) =>{
            return <div key ={i}className="favlist"><h4>{e.authorfirst}  {e.authorlast}</h4><p>{e.spotlight}</p></div>
        })

        return(
            <div>
                <h2>YOUR FAVORITE AUTHORS!</h2>
                <div className="favbox">
                    {display}
                </div>


            </div>


        )
    }
}

export default Authorlist