'use strict';

const express = require('express');
const blockRepository = require('../repository/blockRepository');
const app = express();

const getBlockBydate = () => {
  return new Promise((resolve, reject) => {
    blockRepository.getBlocksBydate(date)
    .then((blocks) => {
      if(blocks.length > 0){
        resolve(blocks);
      } else {
        resolve({});
      }
    })
    .catch((err) => {
      reject(err);
    })
  })  
};