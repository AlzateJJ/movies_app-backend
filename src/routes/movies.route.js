const { getAll, create, getOne, remove, update } = require('../controllers/movies.controllers');
const express = require('express');

const moviesRouter = express.Router();

moviesRouter.route('/movies')
    .get(getAll)
    .post(create);

moviesRouter.route('/movies/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

moviesRouter.route('/movies/:id/genres')
    .post(addMovieGenres)

moviesRouter.route('/movies/:id/actors')
    .post(addMovieActors)

moviesRouter.route('/movies/:id/directors')
    .post(addMovieDirectors)

module.exports = moviesRouter;