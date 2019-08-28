const express = require("express");
const DevController = require('./Controllers/DevController');
const LikeController = require('./Controllers/LikeController');

const router = express.Router();

router.post('/devs', DevController.store);
router.post('/devs/:devId/likes', LikeController.store);

module.exports = router;