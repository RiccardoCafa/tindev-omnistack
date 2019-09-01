const axios = require("axios");
const Dev = require("../Models/Dev");

module.exports = {
    async index(req, res) {
        const { user } = req.headers;

        const loggedUser = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedUser.likes } },
                { _id: { $nin: loggedUser.dislikes } },
            ]
        })
        return res.json(users);
    },

    async store(req, res) 
    {
        const { username } = req.body;
        
        const userexist = await Dev.findOne({user:username});
        
        if(userexist){
            return res.json(userexist);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;

        if(!name || !bio) {
            return res.status(400).json({ nome: "existem campos nulos"});
        }

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        }, function(err, user) {
            if(err){
                console.log("Error creating user: ", err);
                res.status(400).json(err);
            } else {
                console.log("User created: ", err);
                res.status(201).json(user);
            }
        });
        
        return res.json(dev);
    }
}