const Task = require('../models/Task')

module.exports = class TaskCOntroller {
    static createTask(req,res) {
        res.render('tasks/create')
    }
}