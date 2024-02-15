import db from '../database'
import {DataTypes} from "sequelize";

const taskModel= db.define('task',{
    type_task_id:{
        type:DataTypes.INTEGER,
        //defaultValue:1,
        references:{
            model: 'type_task',
            key:'id'
        }
    },
    title:{type:DataTypes.STRING},
    description:{type:DataTypes.STRING},
    done:{type:DataTypes.TINYINT}
},{timestamps: true,freezeTableName:true} )



export default taskModel
