var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 声明一个数据集 对象
var itemSchema = new Schema({
    user:Object,
    createDate:String,
    text:String,
    pic:Array,
    category:String,
});
// 将数据模型暴露出去
module.exports = mongoose.model('item', itemSchema);
