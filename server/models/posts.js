var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var Schema = mongoose.Schema;


var Post = new Schema({
  firstName: String,
  lastName: String,
  position: String,
  company: String,
  img: String,
  homeImage: String,
  content: [],
  summary: String,
  social: {
    github: String,
    website: String,
    twitter: String,
    linkedin: String,
    instagram: String
  }
});


mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/posts');
module.exports = mongoose.model('posts', Post);

