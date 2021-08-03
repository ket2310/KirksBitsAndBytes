const Blog  = require('./Blog');
const Poster  = require('./Poster');

// ASSOCIATIONS:
Poster.hasMany(Blog, {
    foreignKey: 'poster_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(Poster, {
    foreignKey: 'poster_id'
})



module.exports = { Blog, Poster}