const sequelize = require('../config/connection');
const { Blog, Poster } = require('../models');

const posterData = require('./posterData.json');
const blogData = require('./blogData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const posters = await Poster.bulkCreate(posterData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      poster_id: posters[Math.floor(Math.random() * posters.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
