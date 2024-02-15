import { HOST,USER,PASSWORD,PORT_MYSQL,DATABASE } from './config'
import{Sequelize} from "sequelize";

const db = new Sequelize({
    host:HOST,
    username:USER,
    password:PASSWORD,
    port:PORT_MYSQL,
    database:DATABASE,
    dialect:"mysql"
})



export default db
