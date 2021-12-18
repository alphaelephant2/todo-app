const router = require('express').Router();
const taskRouter = require('./task.js');
const HomeController = require('../controllers/HomeController.js');

router.get('/', HomeController.home);
router.use('/task', taskRouter)

module.exports = router;