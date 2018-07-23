var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 声明一个数据集 对象
var userSchema = new Schema({
    username:String,
    password:String,
    email:String,
    birthday:String,
    sex:String,
    pic:String,
    friendList:Array,
});
// 将数据模型暴露出去
module.exports = mongoose.model('user', userSchema);
