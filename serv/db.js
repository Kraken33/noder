const mongojs = require('mongojs');

const login = 'kirillya33',
	password = 'qwertY123rt';

dbSync = () => { return mongojs('mongodb://' + login + ':' + password + '@ds163612.mlab.com:63612/dbase', ['article']); }

exports.connect = dbSync;