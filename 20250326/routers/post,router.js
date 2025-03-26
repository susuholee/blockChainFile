const categoryController = require('../controllers/category.controller');
const postController = require('../controllers/post.controller');
const { authMiddleware } = require('./middleware');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('board/main');
})

// /board/list:params;
// 리소스 분류 할때 // 이미 정해져있는 리소스를 분류할때 사용한다.
// 쿼리스트링은 조회 혹은 페이지네이션, 검색에서 사용된다.
// board/list/1
// category=1
// req.params === {category : 1 }
// host:3000/board/list
router.get('/list/:category', async (req, res) => {
    console.log(req.params);
    console.log(req.query);
    const {category} = req.params;
    const { data } = await postController.categorySelectAll(category);
    let postData;
    if(data) 
    postData = data.map(el => el.dataValues);

    res.render('board/list', {data : postData});
})


router.get('/create', authMiddleware,  async (req, res) => {
   const { data }  = await categoryController.selectAll()
   const categoryData = data?.map((el) => el.dataValues);
   console.log("카테고리 데이터",categoryData);
    res.render('board/create', { categorys : categoryData });
})


router.post('/create',  authMiddleware, async (req, res) => {
    const {name, uid} = req.user;
    const {category, title , content} = req.body;
    console.log({category, title , content});
    const data = await postController.create(category, title, content, name, uid)
    res.json(data);
})

module.exports = router;