const express = require('express');
const path = require('path');
const burger = require('./../models/burger.js');

module.exports = app => {
	app.get('/', (req, res) => {
		res.sendFile(__dirname, '/public/index.html');
	});

	app.get('/api/burgers', (req, res) => {
		burger.selectAll(data => {
			res.json(data);
		})
	});

	app.post('/api/burgers', (req, res) => {
		let burgerName = req.body.burgerName;
		burger.insertOne(burgerName, data => res.json(data));
	});

	app.put('/api/burgers/:id', (req, res) => {
		let id = req.params.id;
		burger.updateOne(id, true, (data) => res.json(data));
	});
}