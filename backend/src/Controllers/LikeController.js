const Devs = require('../Models/Dev');

module.exports = ({

    async store(req, res) {

        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Devs.findById(user);
        const targetDev = await Devs.findById(devId);

        if(!targetDev) {
            return res.status(400).json({ error: 'Dev inexistente.'});
        }

        if(targetDev.likes.includes(loggedDev._id)) {
            console.log('Deu match rapaz');
        }
        
        if(loggedDev.likes.includes(targetDev._id)) {
            console.log('Já existe um like para esse usuário.');
            loggedDev.likes.push(targetDev._id);
        }

        await loggedDev.save();

        return res.json({ ok: true });

    }

});