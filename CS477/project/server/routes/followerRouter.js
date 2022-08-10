const express = require('express');

const followerController = require('../controllers/followerController');
const authController = require('../controllers/authController');

const router = express.Router();


router.get('/:id', followerController.getFollowed);
router.post('/', followerController.delFollow);
router.post('/follow', followerController.saveFollower);

module.exports = router;