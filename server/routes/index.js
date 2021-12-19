const router = require('express').Router();
const taskRouter = require('./task.js');
const userRouter = require('./user.js');
const HomeController = require('../controllers/HomeController.js');

router.get('/', HomeController.home);
router.use('/', userRouter);
router.use('/task', taskRouter);

module.exports = router;