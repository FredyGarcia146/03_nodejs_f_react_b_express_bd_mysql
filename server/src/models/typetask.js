import db from '../database'
import { DataTypes } from "sequelize";

const typeTaskModel= db.define('type_task',{
    name:{type:DataTypes.STRING},
    description:{type:DataTypes.STRING}

},{timestamps: false,freezeTableName:true})

export default typeTaskModel