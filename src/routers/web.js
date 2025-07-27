const express = require('express');
const { getHomepage, getAbc, postCreateUser, getCreatePage } = require('../controllers/homeController')
const router = express.Router();
router.get('/', getHomepage);
router.get('/create', getCreatePage);
router.get('/abc', getAbc);
router.post('/create-user', postCreateUser);

module.exports = router;