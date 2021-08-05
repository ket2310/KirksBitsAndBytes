const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const posterRoutes = require('./posterRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/posters', posterRoutes);
router.use('/blogs', blogRoutes);
router.use('/commemts', commentRoutes);

module.exports = router;
