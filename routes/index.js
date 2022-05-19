const routes = require('express').Router();
routes.use('/', require('./home'));
routes.use('/users', require('./users'));
// routes.use('/api-docs', require('./swagger'));






module.exports = routes  