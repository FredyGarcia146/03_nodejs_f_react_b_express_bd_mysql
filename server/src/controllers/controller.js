//import Task from '../models/Task'
import db from "../database";
import taskModel from "../models/task";
import typeTaskModel from "../models/typetask";


export const renderTasks = async (req, res) => {
    try {
        const tasks = await taskModel.findAll();
        //const typeTasks = await typeTaskModel.findAll();
        //const [typeTasks_Filter] = await db.query("SELECT * FROM type_task WHERE id =1 ");

        //res.json(tasks)
        res.send(tasks)
        //res.send({tasks: tasks})

        //res.send({tasks: tasks, typeTasks: typeTasks, typeTasks_Filter: typeTasks_Filter})
        //res.send({tasks:tasks},{typeTasks:typeTasks})
    } catch (e) {
        console.log(e)
        res.json({
            "message": "get Data error"
        });
    }
}

export const renderTypeTasks = async (req, res) => {
    try {
        const typeTasks = await typeTaskModel.findAll();
        res.send(typeTasks)
    } catch (e) {
        console.log(e)
        res.json({
            "message": "get Data error"
        });
    }
}

export const getTask = async (req, res) => {
    try {
        const task = await taskModel.findByPk(req.params.id);
        res.send(task)
    } catch (e) {
        console.log(e)
        res.json({
            "message": "get Data error"
        });
    }
}


export const addTask = async (req, res) => {
    try {
        await taskModel.create(req.body);
        res.json({
            "message": "Register Successful"
        });
    } catch (e) {
        console.log(e)
        res.json({
            "message": "Register Failed"
        });
    }
}

export const editTask = async (req, res) => {
    try {
        await taskModel.update(req.body, {
            where: {id: req.params.id},
            returning: true,
            plain: true
        });
        res.json({
            "message": "Update Successful"
        });

    } catch (e) {
        console.log(e)
        res.json({
            "message": "Update error"
        });
    }
}

export const deleteTask =async (req, res) => {
    try {
        await taskModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Delete Successful"
        });
    }catch (e) {
        console.log(e)
        res.json({
            "message": "Delete error"
        });
    }
}

export const toggleDoneTask = async (req, res) => {
    try {
        const task = await taskModel.findByPk(req.params.id);
        let doneA = task.done
        if (doneA === 0) {doneA = 1} else {doneA = 0}

        console.log(doneA)
        await taskModel.update({
            done: doneA
        }, {
            where: {id: req.params.id}
        })

        res.json({
            "message": "Change Done Successful"
        });

    } catch (e) {
        console.log(e)
        res.json({
            "message": "Change Done error"
        });
    }
}




/*








export const editView =async (req, res) => {
    try {
        const { id } = req.params
        const [tasks] =  await pool.query("SELECT * FROM task WHERE id = ?",[id]);
        res.render('edit',{tasks:tasks[0]})
    }catch (e) {
        console.log(e)
    }
}




*/