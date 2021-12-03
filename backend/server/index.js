const { application } = require('express')
const express = require('express')
const path = require('path');


const app = express()

app.use('/', express.static(path.join(__dirname, '..', '..', 'frontend', 'dist')));
const port = 3000;

app.listen(port, () => {
  console.log('\n------------------------------\nserver running\n------------------------------')
});
  