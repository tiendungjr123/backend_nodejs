const express = require('express');
const router = express.Router();
const APIController = require('../controllers/APIController'); // ✅ Sửa ở đây

const initAPIRouter = (app) => {
  router.get('/users', APIController.getAllUsers);
  router.post('/create-user', APIController.createNewUser);
  router.put('/update-user', APIController.updateUser);
  router.delete('/update-user/:id', APIController.deleteUser);
  return app.use('/api/v1/', router);
};

module.exports = initAPIRouter;
