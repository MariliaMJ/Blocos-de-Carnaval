'use strict';

const blockRepository = require('../repository/blockRepository');

const getBlockByDate = (day) => {
	return new Promise((resolve, reject) => {
		blockRepository.getBlockByDate(day)
			.then((blocks) => {
				if(blocks.length > 0){
					resolve(blocks);
				} else {
					resolve({message: "no blocks available"});
				}
			})
			.catch((err) => {
				reject(err);
			})
	})
};

module.exports = {getBlockByDate,};