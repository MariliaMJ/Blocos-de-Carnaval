const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
const block = require('./src/controller/blockController');


app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

app.listen(port);

app.get('/', (req, res) => res.json({message: 'Blocos de Carnaval!'}));
app.get('/blocks/:date', (req, res) => {
  let day = req.params.date.value;
  block.getBlockBydate(day)
    .then((result) => {
      res.send(200).json(result);
    })
    .catch((err) => {
      res.send(404).json(err);
    })
});

console.log(`listening on port ${port}`);