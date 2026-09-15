const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
  name: String,
  description: String,
  price: String,
});

const menuCategorySchema = new Schema({
  category: String,
  items: [menuItemSchema],
});

const Menu = mongoose.model('Menu', menuCategorySchema);
module.exports = Menu;
