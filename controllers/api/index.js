const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const posterRoutes = require('./posterRoutes');

router.use('/posters', posterRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
