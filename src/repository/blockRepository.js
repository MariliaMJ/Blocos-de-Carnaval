const request = require('request');

const getBlocks = () => {
  new Promise ((resolve, reject) => {
    request.get('http://www.blocosderua.com/wp-json/site/v1/programacao?2018')
  });
}