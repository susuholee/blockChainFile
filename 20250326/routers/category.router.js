const router = require('express').Router();
const  categoryController =  require('../controllers/category.controller')
const { authMiddleware} =  require('../routers/middleware')


router.post('/create', authMiddleware, async (req, res) => {
    const { name } = req.body;
    const { uid } = req.user;
    const data = await categoryController.create(name, uid);
    res.json(data);
})

module.exports = router;