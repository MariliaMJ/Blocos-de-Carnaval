'use strict';

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
app.get('/blocks/:day', (req, res) => {
	let day = req.params.day;

	block.getBlockByDate(day)
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			res.sendStatus(404).json(err);
		})
});

console.log(`listening on port ${port}`);