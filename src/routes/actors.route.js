const { getAll, create, getOne, remove, update } = require('../controllers/actor.controllers');
const express = require('express');

const actorsRouter = express.Router();

actorsRouter.route('/actors')
    .get(getAll)
    .post(create);

actorsRouter.route('/actors/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = actorsRouter;