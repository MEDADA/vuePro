var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 声明一个数据集 对象
var chattingRecord = new Schema({
    chatRoomId : String,
    user:[
        {
            userid:String,
            pic:String,
            username:String,
        },{
            userid:String,
            pic:String,
            username:String,
        }
    ],
    record:Array
});
// 将数据模型暴露出去
module.exports = mongoose.model('chattingRecord', chattingRecord);
