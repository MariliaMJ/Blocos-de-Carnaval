const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const block = require('./src/controller/blockController');

const blockRouter = express.Router();

blockRouter.get('/', (req, res) => res.json({message: 'Blocos de Carnaval!'}));
blockRouter.get('/blocks/:date', (req, res) => {
  let day = req.params.date.value;
  block.getBlockBydate(day)
    .then((result) => {
      res.send(200).json(result);
    })
    .catch((err) => {
      res.send(404).json(err);
    })
});