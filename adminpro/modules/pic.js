var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 声明一个数据集 对象
var picSchema = new Schema({
  title:String,
  author:String,
  pic:Array,
  createDate:String,
  user_id:String,
});
// 将数据模型暴露出去
module.exports = mongoose.model('pic', picSchema);
