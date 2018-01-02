const { getData, UserAdd, getOne } = require('../models/model');

exports.find = (cb)=>{
	getData((err, doc)=>{
		articles = {
			articleAll: ({page})=>{
				let docs = doc.slice((page*20-20),page*20)
				return docs;
			},
			articleCategory: ({category})=>{
				let obj = [];
				let i = 0;
				// let pageAll = page*10;
				// let pageI = pageAll - 10;
				for(let i = 0;obj.length<10;i++) {
					if(doc.length <= i) {
						console.log(i);
						break;
					}
					if(doc[i].category == category) {
						obj = obj.concat(doc[i]);
					}
				}
				return obj;
			},
    		articleOne: ({id})=>{
      			return doc[doc.length - id -1];
			},
			articleEdit: ({input})=>{
				console.log(input);
				editData(input);
				return {
					isDone: 'Done'
				};
			},
			userAdd: ({input})=>{
				console.log(input);
				UserAdd(input);
				return {
					isDone: 'Done'
				};
			},
			users: ({cols})=> {
				docs = doc.slice(cols*100-100, cols*100);
				return docs;
			}
  		}
		cb(articles);
	});
}