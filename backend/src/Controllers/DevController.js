const axios = require("axios");
const Dev = require("../Models/Dev").default;

module.exports = {
    async store(req, res) 
    {
        const { username } = req.body;

        const userexist = await Dev.findOne({user:username});

        if(userexist){
            return res.json(userexist);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        return res.json(dev);
    }
}