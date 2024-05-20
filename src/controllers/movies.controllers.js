const catchError = require('../utils/catchError');
const Movie = require('../models/Movie');
const Actor = require('../models/Actor');
const Director = require('../models/Director');
const Genre = require('../models/Genre');

const getAll = catchError(async(req, res) => {
    const results = await Movie.findAll({ include: [Actor, Director, Genre]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Movie.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Movie.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const setMovieGenres = catchError(async(req, res) => {
    const { id } = req.params
    const movieSelected = await Movie.findByPk(id)
    if (!movieSelected) return res.status(404).json({message: "movie not found :("})

    await movieSelected.setGenres(req.body)
    const genres = await movieSelected.getGenres()
    return res.status(200).json(genres)
})

const setMovieActors = catchError(async(req, res) => {
    const { id } = req.params
    const movieSelected = await Movie.findByPk(id)
    if (!movieSelected) return res.status(404).json({message: "movie not found :("})

    await movieSelected.setActors(req.body)
    const genres = await movieSelected.getActors()
    return res.status(200).json(genres)
})

const setMovieDirectors = catchError(async(req, res) => {
    const { id } = req.params
    const movieSelected = await Movie.findByPk(id)
    if (!movieSelected) return res.status(404).json({message: "movie not found :("})

    await movieSelected.setDirectors(req.body)
    const genres = await movieSelected.getDirectors()
    return res.status(200).json(genres)
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setMovieGenres,
    setMovieActors,
    setMovieDirectors
}