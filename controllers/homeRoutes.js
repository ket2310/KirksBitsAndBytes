const router = require('express').Router();
const { Blog, Poster, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all blogs and JOIN with posterer data
    const blogData = await Blog.findAll({
      include: [
        {
          model: Poster,
          attributes: ['name'],
        },
        {
          model: Comment,
          attributes: ['comments']
        }
      ],
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) =>
      blog.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blog/:id',  withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: Poster,
          attributes: ['name'],
        },
        {
          model: Comment,
          attributes: ['comments`']
        }
      ],
    });

    const blog = blogData.get({ plain: true });
    console.log(blog)
    res.render('blog', {
      ...blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/myblog/:id',  withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: Poster,
          attributes: ['name'],
        },
        {
          model: Comment,
          attributes: ['comments`']
        }
      ],
    });

    const blog = blogData.get({ plain: true });
  
    res.render('myblog', {
      ...blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      where:{
        poster_id: req.session.poster_id,
      },
    })
      // Serialize data so the template can read it
      const blogs = blogData.map((blog) =>
      blog.get({ plain: true })
    );


  
    res.render('dashboard', {
      blogs,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup' , (req, res) =>{ 
    res.render('signup')
})

router.get('/createblog' , (req, res) =>{ 
  res.render('createblog')
})

module.exports = router;
