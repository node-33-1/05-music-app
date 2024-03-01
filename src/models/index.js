const Album = require("./Album");
const Artist = require("./Artist");
const Genre = require("./Genre");
const Song = require("./Song");

Artist.belongsToMany(Genre, { through: "artists_genres" });
Genre.belongsToMany(Artist, { through: "artists_genres" });

Album.belongsTo(Artist);
Artist.hasMany(Album);

Song.belongsTo(Album);
Album.hasMany(Song);
