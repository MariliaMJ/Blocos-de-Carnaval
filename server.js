const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;


app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

app.listen(port);

console.log(`listening on port ${port}`);