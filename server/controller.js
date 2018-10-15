

const addFavorite = (req, res, next) => {
    const dbInstance = req.app.get('db');
    console.log(req.body)
    const {authorid, authorfirst, authorlast, spotlight} = req.body;

    dbInstance.add_favorite([authorid, authorfirst, authorlast, spotlight])
    .then(()=> res.sendStatus(200))
    .catch(error=>{
        res.status(500).send(error)
        console.log(error)
    })

}

const getFavorites = (req, res, next) => {
    const dbInstance = req.app.get('db');
    
    dbInstance.get_all_data()
    .then(response => res.status(200).json(response))
    .catch(error => {
        res.status(500).send(error)
        console.log(error)
    })
}

module.exports = {addFavorite, getFavorites}

