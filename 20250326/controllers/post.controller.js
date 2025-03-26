const {Post, Category} = require('../models/config');
const categoryController = require('./category.controller');

const postController = {
    async create (category_id, title, content, user, user_id) {
        try {
            await Post.create({category_id, title, content, user, user_id});
            return {state : 200, message : "글 추가 완료~"}
        } catch (error) {
            console.log(error)
            return {state : 400, message : error}
        }
    },
    async categorySelectAll (name) {
        try {
            // include에 모델을 넣으면 모델에 포함된 데이터를 모두 가져온다
            const data = await Category.findAll({where : {name : name}, include : [Post]})
            return {state : 200, data : data[0].dataValues.Posts};
        } catch (error) {
            return {state : 400, message : error};
        }
    }
}

module.exports = postController;