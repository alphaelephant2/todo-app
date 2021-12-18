const taskRouter = require('express').Router();
const TaskController = require('../controllers/TaskController');

taskRouter.get('/', TaskController.showAll);
taskRouter.post('/', TaskController.create);

taskRouter.get('/:id', TaskController.showById);
taskRouter.put('/:id', TaskController.editTask);
taskRouter.delete('/:id', TaskController.delete);

module.exports = taskRouter;