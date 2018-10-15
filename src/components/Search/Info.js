import React, {Component} from 'react'
import axios from 'axios'

class Info extends Component {

    constructor(){
        super();
        this.state = {
            info: []
        }
        this.addFavorite = this.addFavorite.bind(this)
    }

    componentDidMount(){
        this.setState({info: this.props.location.state.info})
    }

    back = ()=> {
        this.props.history.goBack()
    }

    addFavorite(){
        console.log(this.state.info)
        const {authorid, authorfirst, authorlast, spotlight} = this.state.info
        axios.post('http://localhost:3001/api/favorites', 
        {"authorid": authorid, "authorfirst": authorfirst, "authorlast": authorlast, "spotlight": spotlight})
    }



    render(){

        let name = this.state.info.authordisplay
        let spotlight = this.props.location.state.info.spotlight.toString()
        var escapeChars = { lt: '<', gt: '>', quot: '"', apos: "'", amp: '&' };


        //implementing regex to filter out unwanted html tags and escape sequences
    function unescapeHTML(str) {
    return str.replace(/\&([^;]+);/g, function(entity, entityCode) {
        var match;

        if ( entityCode in escapeChars) {
            return escapeChars[entityCode];
        } else if ( match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
            return String.fromCharCode(parseInt(match[1], 16));
        } else if ( match = entityCode.match(/^#(\d+)$/)) {
            return String.fromCharCode(~~match[1]);
        } else {
            return entity;
        }
    });
    }

    let bio = unescapeHTML(spotlight).replace(/<\/?[^>]+>/gi, '')
        

        return(<div className="info">

            <h1>Author Info</h1>
            <h3>{name}</h3>
            <p>{bio}</p>
            <div>
                <button id="infoback" onClick={this.back}>Back</button>
                <button id="addFav" onClick={this.addFavorite}>Follow</button>
            </div>
            </div>


        )
    }
}

export default Info