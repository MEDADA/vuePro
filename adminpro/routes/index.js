var express = require('express');
var router = express.Router();

var Pic = require('../modules/pic');
var User = require('../modules/user');
var Item = require('../modules/item');
var ChattingRecords = require('../modules/chattingRecords')
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
// 查找好友
router.get('/queryUser/:param',function (req,res) {
    let param = req.params.param;
    User.find({username:{$regex: param,$options:'i'}}, function (err,json) {
        if(err) throw err;
        res.send(json)
    });
});
//获取好友列表
router.get('/getFriends/:id',function (req,res) {
    let id = req.params.id;
    User.findOne({_id:id}, function (err,json) {
        if(err) throw err;
        res.send(json.friendList)
    });
});
//查找用户ID
router.get('/getUserId/:id',function (req,res) {
    let id = req.params.id;
    User.findOne({_id:id}, function (err,json) {
        if(err) throw err;
        let user = {
            username:json.username,
            pic:json.pic,
            _id:json._id
        }
        res.send(user)
    });
});
//创建保存通道
router.post('/creatChatRecord/:id',function (req,res,next) {
    let userid2 = req.params.id;
    let userid1 = req.body.id;
    let chatRoomId = req.body.chatRoomId;
    ChattingRecords.find({user:{$all:[userid1,userid2]}},function (err,json) {
        if(err) throw err;
        console.log(json)
            if(json.length == 0 && chatRoomId){
                    let item = new ChattingRecords({
                        chatRoomId : chatRoomId,
                        user:[userid1,userid2],
                        record:[
                            {
                                id:userid1,
                                text:'这是userid1说的第一句话'
                            },{
                                id:userid1,
                                text:'这是userid1说的第二句话'
                            },{
                                id:userid2,
                                text:'这是userid2说的第一句话'
                            }
                        ]
                    });
                    item.save(function (err2,json2) {
                        if(err2) throw err2;
                        res.send(json2)
                    });
            }else{
                res.send(json)
            }
    })

});
//添加好友
router.post('/addFriend/:id',function (req,res) {
    let id = req.params.id;
    let user = {
        _id:req.body._id,
        username:req.body.username,
        pic:req.body.pic
    };
    let friend = {
        _id:id,
    };
    User.findOne({_id:id}, function (err,json) {
        if(err) throw err;
        friend.username = json.username;
        friend.pic = json.pic;
        User.update({_id:user._id},{$push:{friendList:friend}},function (err,json) { //更新本人好友列表
            if(err) throw err;
            res.send(json)
        })
        User.update({_id:id},{$push:{friendList:user}},function (err,json) { //更新对方好友列表
            if(err) throw err;
            res.send(json)
        })
    });
});
//获取分类
router.get('/category/:kind',function (req,res,next) {
    let kind = req.params.kind;
    Item.find({category:kind},function (err,json) {
        if(err) throw err;
        res.send(json);
    })
});
//用户发布列表
router.get('/userReleaseList',function (req,res,next) {
    Item.find({},function (err,json) {
        if(err) throw err;
        res.send(json)
    });
});
//指定用户发布列表
router.get('/userReleaseList/:param',function (req,res,next) {
    Item.find({category:decodeURI(req.params.param)},function (err,json) {
        if(err) throw err;
        res.send(json)
    });
});
//用户发布详细
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
