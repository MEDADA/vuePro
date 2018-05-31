var express = require('express');
var router = express.Router();

var Pic = require('../modules/pic')
//设置跨域访问
router.all('*', function(req, res, next) {
    //允许跨域API
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header('Access-Control-Allow-Credentials','true');
    next();
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/pics', function(req, res, next) {
    Pic.find({}, function (err, json) {
        if (err) throw  err;
        res.send(json)
    });
});
module.exports = router;
