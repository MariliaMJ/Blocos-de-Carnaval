'use strict';

const axios = require('axios');

const getBlocks = () => {
	return new Promise((resolve, reject) => {

		const blocosderua = 'http://www.blocosderua.com/wp-json/site/v1/programacao?2018';

		axios.get(blocosderua)
			.then((response) => {
				if(response !== undefined){
					resolve(response.data);
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

const getBlockByDate = (day) => {
	return new Promise((resolve, reject) => {
		getBlocks().then((blocks) => {
			if(blocks.length > 0){
				let addressOnly = blocks.map(elem => elem.acf);
				let blockBydate = addressOnly.filter(block => block.data === day);
				resolve(blockBydate);
			} else {
				resolve({message: "no blocks"});
			}
		}).catch((err) => {
			reject(err);
		})
	});
}

module.exports = {getBlockByDate,}