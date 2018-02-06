const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
const block = require('../controller/blockController');

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

app.get("/", (req, res) => res.json({message: "Blocos de Carnaval!"}));

app.route("/blocks/:date")
  .get(block.getBlockBydate);

app.listen(port);

console.log('listening on port ${port}', port);