/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '..', '..', 'frontend', 'dist')));
const port = 3000;

const items = ['Obvious fake moustache',
  'Squeaky door sound',
  'First person view',
  'Going rouge',
  'Old truck',
  'Vehicle breakdown',
  'No phone service',
  'Obsolete tech',
  'Hiding under a bed',
  'Costumes',
  'Dirty bathroom',
  'Black and White film',
  'Unconventional weapon',
  'Bad accent',
  'Law enforcement',
  'Mental hospital',
  'Car ride conversation',
  'Close call',
  'Plot call back',
  'Mental breakdown',
  'attempted first aid',
  'Black Nail Polish',
  'Phone Ringing',
  'Disturbing Childrens Toy',
  'Irate Elderly',
  'Hitchhiker',
  'Chase Sequence',
  'Vehicle Breaks Down',
  'Light Doesn\'t work',
];

const rooms = ['mattshouse'];

app.get('/card', (req, res) => {
  // console.log(req);
  // the items will change when we set up the database
  res.send(items);
});

app.get('/getRooms', (req, res) => {
  console.log(rooms);
  res.send(rooms);
});

app.post('/addRoom/:room', (req, res) => {
  console.log(req.params.room);
  rooms.push(req.params.room);
});

app.put('/updateboard', (req, res) => {
  console.log('put request', req.body);
  res.send('update this');
});

app.listen(port, () => {
  console.log('\n------------------------------\nserver running\n------------------------------');
});
