const { Task } = require('../models')

class TaskController {
    static async showAll(req, res, next) {
        try {
            const tasks = await Task.findAll({
                order: [['completed', 'ASC']]
            });

            res.status(200).json(tasks);

        } catch (err) {
            console.log(err);
            next(err); 
        }
    }

    static async create(req, res, next) {
        const { title, description, deadline } = req.body;
        try {
            const completed = false;
            const newTask = await Task.create({
              title,
              description,
              deadline,
              completed
            });

            const result = {
              "title": newTask.title,
              "description": newTask.description,
              "deadline": newTask.deadline,
              "completed": newTask.completed
            }

            res.status(201).json(result);

        } catch (err) {
          console.log(err);
          next(err);
        }
    }

    static async showById(req, res, next) {
      try {
          const id = +req.params.id;
          const task = await Task.findByPk(id)

          res.status(200).json(task);

      } catch (err) {
        console.log(err);
        next(err);
      }
    }

    static async editTask(req, res, next) {
      try {
        const id = +req.params.id;
        const { title, description, deadline, completed } = req.body;
        const updateTask = await Task.update({
          title,
          description,
          deadline,
          completed
        }, { where: { id }, returning: true})

        res.status(200).json(updateTask[1][0]);

      } catch (err) {
        console.log(err);
        next(err);
      }
    }

    static async delete(req, res, next) {
      try {
        const id = +req.params.id;
        const deletedTask = await Task.destroy({
          where: { id }, returning: true
        })

        res.status(200).json({msg: "Todo success to delete"});

      } catch (err) {
        console.log(err);
        next(err);
      }
    }
}

module.exports = TaskController;