var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var allData = {'projects': projects.projects, 'gridOption': false }
  	res.render('index', allData);
};

exports.viewGrid = function(req, res){
	var allData = {'projects': projects.projects, 'gridOption': true }
  	res.render('index', allData);
};