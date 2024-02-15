import app from './app'
import db from'./database'
import { PORT } from './config'


(async () => {

    try {
        await db.authenticate()
        console.log('Connection DB Successful')
    } catch (error){
        console.log(`Error Connection DB :  ${error} `)
    }

})()

app.listen(PORT)
console.log('Server on port', PORT)
