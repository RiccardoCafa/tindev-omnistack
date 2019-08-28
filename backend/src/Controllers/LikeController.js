const Devs = require('../Models/Dev').default;

module.exports = ({

    async store(req, res) {

        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Devs.findById(user);
        const targetDev = await Devs.findById(devId);

        if(!targetDev) {
            return res.status(400).josn({ error: 'Dev inexistente.'});
        }

        if(targetDev.likes.includes(loggedDev._id)) {
            console.log('Deu match rapaz');
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json({ ok: true });

    }

});