const Blog  = require('./Blog');
const BlogComment = require('./BlogComment');
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

// Products belongToMany Tags (through ProductTag)
Blog.belongsToMany(Comment, {
    through: {
      model: BlogComment,
      unique: false
    } ,  as:'feedback'
  });
  

module.exports = { 
    Blog,
    Poster,
    Comment,
    BlogComment
}