const router = require('express').Router();
const { Poster } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const posterData = await Poster.create(req.body);

    req.session.save(() => {
      req.session.poster_id = posterData.id;
      req.session.logged_in = true;

      res.status(200).json(posterData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const posterData = await Poster.findOne({ where: { email: req.body.email } });
    if (!posterData) {
      res
        .status(400)
        .json({ message: 'Incorrect name or password, please try again' });
      return;
    }
    const validPassword = await posterData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect name or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.poster_id = posterData.id;
      req.session.logged_in = true;
      
      res.json({ poster: posterData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
