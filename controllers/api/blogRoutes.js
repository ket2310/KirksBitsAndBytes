const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newblog = await Blog.create({
      ...req.body,
      poster_id: req.session.poster_id,      
    });

    res.status(200).json(newblog);
  } catch (err) {
  res.status(400).json(`This is a ${err}`);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  console.log('Are we here yet????????????????????????????')
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        poster_id: req.session.poster_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {

  try {
    const blog = await Blog.update(
      {
          content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
