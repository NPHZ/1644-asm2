var express = require('express');
const plushModel = require('../model/plushModel');
const figureModel = require('../model/figureModel');
var router = express.Router();

router.get('/', async (req, res) => {
    var figures = await figureModel.find();
    var plushs = await plushModel.find();

    res.render('shop/index', { figure: figures, plush: plushs });
});

router.get('/figureDetail/:id', async (req, res) => {
    var id = req.params.id;
    var figures = await figureModel.findById(id);
    res.render('shop/figureDetail', { figure: figures });
});


router.get('/plushDetail/:id', async (req, res) => {
    var id = req.params.id;
    var plush = await plushModel.findById(id);
    res.render('shop/plushDetail', { plush: plush });
});


router.post('/search', async (req, res) => {
    var keyword = req.body.keyword;
    var figures = await figureModel.find({ name: new RegExp(keyword, "i") });
    var plushs = await plushModel.find({ name: new RegExp(keyword, "i") });
    res.render('shop/index', { figure: figures, plush: plushs });
});


module.exports = router;