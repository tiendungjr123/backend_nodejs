const express = require('express');
const { getHomepage, getAbc, postCreateUser } = require('../controllers/homeController')
const router = express.Router();
router.get('/', getHomepage);

router.get('/abc', getAbc);
router.post('/create-user', postCreateUser);

module.exports = router;