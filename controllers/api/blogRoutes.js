const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils');

//get all bloges
router.get('/', async (req, res) => {
  res.render('all');
});

//get one blog
router.get('/blog/:id', async (req, res) => {
  // This method renders the 'blog' template, and uses params to select the correct blog to render in the template, based on the id of the blog.
  return res.render('blog', dishes[req.params.num - 1]);
});


module.exports = router;
