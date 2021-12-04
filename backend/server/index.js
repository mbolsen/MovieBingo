/* eslint-disable no-console */
const { exec } = require('child_process');
const express = require('express');
const path = require('path');
const { db, Genres, Rooms } = require('../database/index');

const app = express();
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '..', '..', 'frontend', 'dist')));
const port = 3000;

const items = ['Obvious fake moustache', 'Squeaky door sound', 'First person view', 'Going rouge', 'Old truck', 'Vehicle breakdown', 'No phone service', 'Obsolete tech', 'Hiding under a bed', 'Costumes', 'Dirty bathroom', 'Black and White film', 'Unconventional weapon', 'Bad accent', 'Law enforcement', 'Mental hospital', 'Car ride conversation', 'Close call', 'Plot call back', 'Mental breakdown', 'attempted first aid', 'Black Nail Polish', 'Phone Ringing', 'Disturbing Childrens Toy', 'Irate Elderly', 'Hitchhiker', 'Chase Sequence', 'Vehicle Breaks Down', 'Light Doesn\'t work'];

// const rooms = ['mattshouse'];

app.get('/card', (req, res) => {
  // the items will change when we set up the database
  Genres
    .findOne({ genre: 'Scary Movie' })
    .exec((err, data) => {
      console.log('data from genre get', data);
      res.send(data);
    });
});

app.get('/getRooms', (req, res) => {
  Rooms
    .find({ genre: 'Scary Movie' })
    .exec((err, data) => {
      console.log('data from genre get', data);
      const rooms = data.map((item) => item.roomName);
      res.send(rooms);
    });
});

app.post('/addRoom/:room', (req, res) => {
  const defaultGenre = 'Scary Movie';
  // const GameCard = axios.get('/card');
  console.log('room req', req.params.room);
  const data = {
    genre: defaultGenre,
    roomName: req.params.room,
    card: items,
  };
  const document = new Rooms(data);
  document.save((err, doc) => {
    if (err) {
      throw err;
    } else {
      console.log('ROOMS POST SUCCESS', doc);
    }
  });
  // rooms.push(req.params.room);
  res.send('posted');
});

app.post('/newUser', (req, res) => {
  // add the user
});

app.put('/updateboard', (req, res) => {
  console.log('put request', req.body);
  res.send('update this');
});

app.listen(process.env.PORT || port, () => {
  console.log('\n------------------------------\nserver running\n------------------------------');
});
