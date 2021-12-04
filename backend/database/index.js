const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/movie-bingo', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DATABASE CONNECTION ERROR'));
db.once('open', () => {
  console.log(console.log('------------------------------\ndatabase connected\n------------------------------\n'));
});

// define Schemas for database
const genresSchema = new mongoose.Schema({
  genre: String,
  card: [],
  reported: Boolean,
  clean: Boolean,
});

const roomsSchema = new mongoose.Schema({
  roomName: String,
  movie: String,
  genre: String,
  card: [],
});

const usersSchema = new mongoose.Schema({
  username: String,
  gamecard: [],
  score: Number,
});

module.exports.Genres = mongoose.model('genres', genresSchema);
module.exports.Rooms = mongoose.model('rooms', roomsSchema);
module.exports.Users = mongoose.model('users', usersSchema);
module.exports.db = db;
