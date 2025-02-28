const express = require('express');
const userController = require('../controllers/userController.js');
const {processAuth} = require('../middleware/authMiddleware.js');

const router = express.Router();

router.get('/testGet', async (req, res) => {
    userController.testUserControllerGet(req, res);
});

router.post('/signup', userController.createUser);

router.post('/testPost', processAuth, userController.testUserControllerPost);

module.exports = router;