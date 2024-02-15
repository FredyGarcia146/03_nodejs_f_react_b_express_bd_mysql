import {Router} from 'express'
import {
    renderTasks,
    renderTypeTasks,
    addTask,
    toggleDoneTask,
    deleteTask,
    editTask,
    getTask
    /*


    editView
    */


} from '../controllers/controller'

const router = Router()


router.get("/", renderTasks)
router.get("/typetasks", renderTypeTasks)
router.get("/tasks/:id/get", getTask)
router.post("/tasks/add", addTask)
router.put("/tasks/:id/edit", editTask)
router.delete("/tasks/:id/delete", deleteTask)

router.put("/tasks/:id/toggleDone", toggleDoneTask)

export default router

/*



router.post("/tasks/add", addTasks)





router.get("/tasks/:id/edit", editView)





*/



