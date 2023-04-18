const routes = require('express').Router();
const myController = require('../controllers');

routes.get('/myName', myController.myName);
routes.get('/wife', myController.myWifeName);


module.exports = routes;