const express = require('express');
const genresRouter = require('./genres.route');
const directorsRouter = require('./directors.route');
const moviesRouter = require('./movies.route');
const actorsRouter = require('./actors.route');
const router = express.Router();

// colocar las rutas aquí
router.use(genresRouter)
router.use(directorsRouter)
router.use(moviesRouter)
router.use(actorsRouter)

module.exports = router;