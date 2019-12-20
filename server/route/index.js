const express = require('express');
const controller = require('../controller');
const router = express.Router();


router.route('/get-github-token')
    .post(controller.getToken);

module.exports = router;