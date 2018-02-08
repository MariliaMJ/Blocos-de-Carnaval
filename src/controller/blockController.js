'use strict';

const express = require('express');
const blockRepository = require('../repository/blockRepository');
const app = express();

const getBlockBydate = () => {
  app.get('/blocks/:date',  (req, res) => {
    const date = req.params.date.value;
    
    blockRepository.getBlocksBydate(date)
      .then((blocks) => {

      })
  });  
};