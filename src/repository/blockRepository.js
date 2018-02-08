'use strict';

const axios = require('axios');

const getBlocks = () => {
  return new Promise((resolve, reject) => {    
    
    const blocosderua = 'http://www.blocosderua.com/wp-json/site/v1/programacao?2018';
    
    axios.get(blocosderua)
      .then((response) => {
        if(response !== undefined){
          resolve(JSON.parse(response));
        } else {
          resolve({
            message:"Response not retrieved"
          });
        }
      })
      .catch((error) => {
        reject(error);
      })
  })
}

const getBlockByDate = (date) => {
  getBlocks().then((blocks) => {
    if(blocks.length > 0){

    }
  })
}

const filterByKey = ((key) => {

})

module.exports = {
  getBlockByDate,
}