const Actor = require("./Actor");
const Movie = require("./Movie");
const Director = require("./Director");
const Genre = require("./Genre");

Movie.belongsToMany(Actor, { through: "movies_actors" })
Actor.belongsToMany(Movie, { through: "movies_actors" })

Movie.belongsToMany(Director, { through: "movies_directors" })
Director.belongsToMany(Movie, { through: "movies_directors" })

Movie.belongsToMany(Genre, { through: "movies_genres" })
Genre.belongsToMany(Movie, { through: "movies_genres" })