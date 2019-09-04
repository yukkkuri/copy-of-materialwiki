const ImageModel = require("../models/image");
const mongoose = require("mongoose");
const BaseController = require("./BaseController");

class ImageController extends BaseController{
    async list() {
        try {
            console.log("ok");
            const result = await ImageModel.find();
            console.log(result);
            return {data: result, code: 0, msg: 'success'};
        } catch (e) {
            return {data: '', code: 1, msg: `DB查找错误${e.stack}`};
        }
    }
    async detail(id){
        try {
            const result = await ImageModel.findById(id);
            return {data: result, code: 0, msg: 'success'};
        } catch (e) {
            return {data: '', code: 1, msg: `DB查找错误${e.stack}`}
        }
    }
    async create(item){
        item._id = new mongoose.Types.ObjectId();
        try{
            item.tags = Array(item.tags);
            item.year = Number(item.year);
            const result = await new ImageModel(item).save();
            return {data: result, code: 0, msg: 'success'};
        } catch (e) {
            return {data: '', code: 1, msg: `DB查找错误${e.stack}`}
        }
    }
    async update(item){
        try {
            item.tags = Array(item.tags);
            item.year = Number(item.year);
            const image = await ImageModel.findById(item.id);
            if(image){
                image.imageName = item.imageName;
                image.tags = item.tags;
                image.companyName = item.companyName;
                image.tel = item.tel;
                image.website = item.website;
                image.project = item.project;
                image.location = item.location;
                image.product = item.product;
                image.designer = item.designer;
                image.year = item.year;
                const result = await image.save();
                return {data: result, code: 0, msg: 'success'};
            } else{
                return {data: '', code: 1, msg: '找不到对应ID的数据'};
            }
        } catch (e) {
            return {data: '', code: 1, msg: `DB查找错误${e.stack}`}
        }
    }
    async delete(id){
        try {
            const result = await ImageModel.findByIdAndDelete(id);
            return {data: result, code: 0, msg: 'success'};
        } catch (e) {
            return {data: '', code: 1, msg: `DB查找错误${e.stack}`}
        }
    }
}
const Image = new ImageController();

module.exports = Image;