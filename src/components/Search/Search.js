import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Search extends Component {

    constructor(){
        super()
        this.state = {
            bothfirst: '',
            bothlast: '',
            info: [{author: [{authordisplay: ''}]}],
            startcounter: 0,
            maxcounter: 100,
            counter: 1,
            spotlight: '',
            savefirst: '',
            savelast: '',
            stop: true,
            infobutton: false
        }
        this.getNext = this.getNext.bind(this)
        this.getBack = this.getBack.bind(this)

    }

    handleBothFirst(value){
        this.setState({bothfirst: value})
    }

    handleBothLast(value){
        this.setState({bothlast: value})
    }



    getBoth(){
        this.setState({startcounter: 0, maxcounter: 100, counter: 1})
        axios.get(`https://reststop.randomhouse.com/resources/authors?start=${this.state.startcounter}&max=${this.state.maxcounter}&lastName=${this.state.bothlast}&firstName=${this.state.bothfirst}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response=>{ 
            let filtered = response.data.author.filter((e, i, a)=>e.hasOwnProperty("spotlight") ? e : null)
            
           this.setState({info: filtered, savefirst: this.state.bothfirst, savelast: this.state.bothlast, bothfirst: '', bothlast: '', infobutton: true}, )
           
        })
        .catch(error => console.log(error))
    }

    getNext(){
        if (this.state.stop) {
        this.setState({startcounter: this.state.startcounter + 100})
        console.log(this.state.startcounter)
        axios.get(`https://reststop.randomhouse.com/resources/authors?start=${this.state.startcounter}&max=${this.state.maxcounter}&lastName=${this.state.savelast}&firstName=${this.state.savefirst}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response=>{
            let check = response.data.author
            
            if (check!==undefined){
                if (check.length < 100){
                    this.setState({startcounter: ((this.state.startcounter - 100) + check.length), stop: false})
                }     
                for (let i=0;i<check.length;i++){
                let filtered = response.data.author.filter((e, i, a)=>e.hasOwnProperty("spotlight") ? e : null)
                this.setState({info: filtered})}
        }})
        .catch(error => {
            console.log(error)
    })
    }
    else{
        alert("No more that way!")
        this.setState({startcounter: this.state.startcounter - 100, stop: false})}

    }

    getBack(){
        this.setState({startcounter: this.state.startcounter - 100, stop: true})
        if (this.state.startcounter >= 0){
        axios.get(`https://reststop.randomhouse.com/resources/authors?start=${this.state.startcounter}&max=${this.state.maxcounter}&lastName=${this.state.savelast}&firstName=${this.state.savefirst}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response=>{
            let check = response.data
            console.log(check)
            if (check!==undefined){
            let filtered = response.data.author.filter((e, i, a)=>e.hasOwnProperty("spotlight") ? e : null)
            this.setState({info: filtered})}
           
        })
        .catch(error => {console.log(error)
        this.setState({counter: 1})})}
        else{this.setState({startcounter: 100})
        alert("No more that way!")}}

    

    render(){

        let results = []

        if (this.state.info === undefined){
            this.setState({info: [{author: [{authordisplay: ''}]}]})
            alert("Sorry, can't find that author!")}

        else {results = this.state.info.map((e, i) =>{
                return <p id="names" key={i}>{e.authordisplay}<Link to={{pathname:`/author/${e.authorid}`, state: {info: e}}}>
                Info</Link> </p>
            })
        }
        

        return(
            <div>
            <div id="searchbar">
            <h2>Find Author</h2>
            <input type="text" placeholder="First Name" value={this.state.bothfirst} onChange={(e)=>this.handleBothFirst(e.target.value)}></input>
            <input type="text" placeholder="Last Name" value={this.state.bothlast}onChange={(e)=>this.handleBothLast(e.target.value)}></input>
            <button onClick={()=>this.getBoth()}>Search</button>
            </div>
            <div id="results">
                <div className="paginate">
                <button onClick={this.getBack}>Back</button>
                <h3>Results:</h3>
                <button onClick={this.getNext}>Next</button>
                </div>
            {results}
            </div>
            </div>
        )
    }
    
}

export default Search