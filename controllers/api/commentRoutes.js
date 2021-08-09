const router = require('express').Router();
const { Comment, Blog } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/addcomment', async (req, res) => {
  console.log('Begin comment post!!!!!!!!!!!!!!!!!!!!!!!!')
  console.log(req.body);
  try {
    const newcomment = await Comment.create({
      ...req.body,
      blog_id: req.body.blogid,
    });

    res.status(200).json(newcomment);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        poster_id: req.session.user_id,
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

module.exports = router;
