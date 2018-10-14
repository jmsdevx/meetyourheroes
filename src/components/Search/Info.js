import React, {Component} from 'react'

class Info extends Component {

    constructor(){
        super();
        this.state = {
            info: []
        }
    }

    componentDidMount(){
        this.setState({info: this.props.location.state.info})
        console.log(this.props.location.state.info.spotlight)
        

    }

    back = ()=> {
        this.props.history.goBack()
    }


    render(){

        let name = this.state.info.authordisplay
        let spotlight = this.props.location.state.info.spotlight.toString()
        let string = spotlight.replace(/<\/?[^>]+>/gi, '')
        let next = string.replace(/#1&#160;/gi, '')
        let bio = next.replace(/#160;/gi, '')
        

        return(<div className="info">
            <h1>Author Info</h1>
            <h3>{name}</h3>
            <p>{bio}</p>
            <button id="infoback" onClick={this.back}>Back</button>
        </div>


        )
    }
}

export default Info