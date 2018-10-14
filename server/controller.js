const axios = require('axios')
const bio = []




const getAuthorLast = (req, res, next) => {


    axios.get('https://reststop.randomhouse.com/resources/authors?', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

module.exports = {getAuthorFirst, getAuthorLast}

