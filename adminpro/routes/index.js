var express = require('express');
var router = express.Router();

var Pic = require('../modules/pic');
var User = require('../modules/user');
var Item = require('../modules/item');
//设置跨域访问
router.all('*', function(req, res, next) {
    //允许跨域API
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.post('/login', function(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    User.find({username:username},function (err,json) {
        if(err) throw err;
        console.log(json[0].password)
        if(password === json[0].password){
            res.send(json)
        }else{
            res.send({error:'密码错误'})
        }
    })
});
router.post('/issue',function (req,res,next) {  //发布
    let item = new Item({
        user:req.body.user,
        createDate:req.body.createDate,
        text:req.body.text,
        pic:req.body.pic,
        category:req.body.category,
    });
    item.save(function (err,json) {
        if(err) throw err;
        res.send(json)
    });
});
router.get('/category/:kind',function (req,res,next) {
    let kind = req.params.kind;
    Item.find({category:kind},function (err,json) {
        if(err) throw err;
        res.send(json);
    })
});
router.get('/userReleaseList',function (req,res,next) {
    Item.find({},function (err,json) {
        if(err) throw err;
        res.send(json)
    });
});
router.get('/userReleaseList/:param',function (req,res,next) {
    Item.find({category:decodeURI(req.params.param)},function (err,json) {
        if(err) throw err;
        res.send(json)
    });
});
router.get('/userReleaseDetail/:id',function (req,res,next) {
    Item.find({_id:req.params.id},function (err,json) {
        if(err) throw err;
        res.send(json)
    });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pics', function(req, res, next) {
    Pic.find({}, function (err, json) {
        if (err) throw  err;
        res.send(json)
    });
});

router.get('/productDetail/:id',function (req,res,next) {
    Pic.find({_id:req.params.id},function (err,json) {
        if(err) throw err;
        res.send(json)
    })
})
module.exports = router;
