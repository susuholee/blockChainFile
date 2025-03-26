const router = require('express').Router();
const {adminMiddleware} = require('./middleware');
const categoryController = require('../controllers/category.controller');

router.get('/category', adminMiddleware,  async (req, res) => {
    if(!req.admin) return res.json({state : 403, message : "관리자 계정 검증 실패"})
    const { index } = req.query;
    const categoryData =  await categoryController.selectAllPageNation(index);
    console.log(categoryData);
    console.log(categoryData.data);
    const data = categoryData.data?.map((el) => el.dataValues);
    console.log(data)
    res.render('admin/category', { data : data, count : categoryData.count });
})

module.exports = router;