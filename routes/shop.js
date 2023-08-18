var express = require('express');
const plushModel = require('../model/plushModel');
const figureModel = require('../model/figureModel');
var router = express.Router();

router.get('/', async (req, res) => {
    var figures = await figureModel.find();
    var plushs = await plushModel.find();

    res.render('shop/index', { figure: figures, plush: plushs });
});

router.get('/FigureDetail/:id', async(req, res)=>{
    var id = req.params.id;
    var figures = await figureModel.findById(id);
    res.render('shop/FigureDetail', { figure: figures });
 });


router.get('/plushDetail/:id', async(req, res)=>{
    var id = req.params.id;
    var plush = await plushModel.findById(id);
    res.render('shop/plushDetail', { plush: plush });
});

// router.post('/figureOrder', async (req, res) => {
//     var data = req.body;
//     var id = data.id;
//     var figure = await figureModel.findById(id);
//     var price = data.price;
//     var quantity = data.quantity;
//     var total = price * quantity;
//     var text = "You have ordered a product with id " + id + " and quantity is " + quantity;
//     console.log(text);
//     res.render('shop/figureOrder', { figure: figure, quantity : quantity, price : price , total: total });
//  })


module.exports = router;