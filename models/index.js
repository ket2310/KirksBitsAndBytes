const Blog  = require('./Blog');
const Poster  = require('./Poster');
const Comment = require('./Comment');

// ASSOCIATIONS:
Poster.hasMany(Blog, {
    foreignKey: 'poster_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(Poster, {
    foreignKey: 'poster_id'
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE' 
 });

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id'
})

module.exports = { 
    Blog,
    Poster,
    Comment
}