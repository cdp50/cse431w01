const routes = require('express').Router();
const myController = require('../controllers');

routes.get('/', function (req, res) {
    res.send('Hello World');
 })

routes.get('/awesome', myController.awesome);
routes.get('/superAwesome', myController.superAwesome);


module.exports = routes;