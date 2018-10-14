require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const cors = require('cors')
const massive = require('massive')


const port = 3001
const app = express()

app.use(json())
app.use(cors())

massive( process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)

    //  dbInstance.create_table()
    //     .then(response => {
    //     console.log(response)
    //     }).catch(error => console.log(error))

}).catch(error=>console.log(error));




app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})
