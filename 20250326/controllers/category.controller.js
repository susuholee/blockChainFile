const {Category} = require('../models/config');



const categoryController  = {
    async create(name, uid) {
        try {
            await Category.create({name, user_id : uid});
            return {state :200,  message: "유저 등록했습니다"};
        } catch (error) {   
            return {state :400,  message: error};
        }
    },
    
    async selectAllPageNation (index) {
        try {
            // 페이지네이션을 구현했다 가정하면
            // 2 번을 누르면
            // 5개씩 보여주고 있다.
            // 2번을 누르면 5개를 제외하고 아이템을 보여주면 된다.
            // limit : 몇개 아이템을 보여줄지 제한
            // 1 2 3 4 5 6 7 8 9 10
            const data = await Category.findAll({
                limit : 5, // 5개를 가져온다.
                offset : 5 * (index - 1), // 0 5 10 15 
                // order : [['createdAt', 'DESC']] // 최신순
            });
            const counter = await Category.count(); // 전체 갯수
            return {state : 200, data, count : counter};
        } catch (error) {
            return {state : 400, message : "카테고리 조회 실패!!"}
        }

    },
    async selectAll() {
        try {
            const data = await Category.findAll();
            return {state : 200, data}
        } catch (error) {
            return {state : 400, message : error}
        }
    }
}

module.exports = categoryController;