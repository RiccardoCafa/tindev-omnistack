const Devs = require('../Models/Dev');

module.exports = ({

    async store(req, res) {

        const { devId } = req.params;

        const dev = await Devs.findById(devId);

        if(!dev) {
            return res.status(400).json({ error: 'Dev não existe'});
        }

        return res.json(dev);
    }
})