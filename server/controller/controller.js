var Userdb = require('../model/model');

// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const user = new Userdb({
        name : req.body.name,
        description : req.body.description,
        chain : req.body.chain,
        symbol : req.body.symbol,
        marketcap : req.body.marketcap,
        price : req.body.price,
        launch : req.body.launch,
        telegram_link : req.body.telegram_link,
        coin_website : req.body.coin_website,
        votes:req.body.votes
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/add-user');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res)=>{
    if(req.query.id){
        const id= req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })}

    else if(req.query.name){
        var regex = new RegExp(req.query.name,'i')
        Userdb.find({name:{$regex:regex}})
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        const id= req.query.id;
        Userdb.find().sort({"votes":-1})
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}
// Update a new idetified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, {$inc:{votes:1}}, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}


// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Userdb.findByIdAndUpdate(id, {$inc:{votes:1}}, { useFindAndModify: false})
    .then(data => {
        if(!data){
            
            res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
        }else{
            
            res.send()

        }
    })
    .catch(err =>{
        res.status(500).send({ message : "Error Update user information"})
    })
}

exports.coin_details = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.name;
    Userdb.findByIdAndUpdate(id, {$inc:{votes:1}}, { useFindAndModify: false})
     .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send()

            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}


exports.search = (req, res)=>{
    if(req.query.id){
        const id= req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })}

    else if(req.query.name){
        var regex = new RegExp(req.query.name,'i')
        Userdb.find({name:{$regex:regex}})
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        const id= req.query.id;
        Userdb.find().sort({"votes":-1})
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}
