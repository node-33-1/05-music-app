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

Artist.belongsToMany(Song, { through: "artists_songs" });
Song.belongsToMany(Artist, { through: "artists_songs" });

Genre.belongsToMany(Song, { through: 'genres_songs' });
Song.belongsToMany(Genre, { through: 'genres_songs' });
