const express = require("express");
const DevController = require('./Controllers/DevController');
const LikeController = require('./Controllers/LikeController');
const DislikeController = require('./Controllers/DislikeController');
const SearchController = require('./Controllers/SearchController');

const router = express.Router();

router.get('/devs', DevController.index);
router.get('/devs/:devId/dev', SearchController.store);
router.post('/devs', DevController.store);

router.post('/devs/:devId/dislikes', DislikeController.store);
router.post('/devs/:devId/likes', LikeController.store);

module.exports = router;