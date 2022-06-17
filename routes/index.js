const routes = require('express').Router();
routes.use('/', require('./home'));
routes.use('/users', require('./users'));
routes.use('/armadas', require('./armadas'));
routes.use('/api-docs', require('./swagger'));
routes.use('/profile', require('./profile'));





module.exports = routes  