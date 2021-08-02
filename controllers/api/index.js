const router = require('express').Router();

const blogRoutes = require('./blog-routes.ks');

router.use('/dish', dishRoutes);

module.exports = router;