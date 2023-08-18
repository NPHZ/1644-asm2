const mongoose = require('mongoose');
const plushSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    size: String,
    brand: String,
    quantity:Number,
    category:String,
    description: String,
});

const plushModel = mongoose.model('plush', plushSchema, 'plush');
module.exports = plushModel;
