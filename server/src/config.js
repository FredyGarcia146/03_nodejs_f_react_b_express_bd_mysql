import {config} from 'dotenv'
config()

export const HOST =process.env.HOST || "localhost"
export const USER =process.env.USER || "root"
export const PASSWORD =process.env.PASSWORD || "password"
export const PORT_MYSQL =process.env.PORT_MYSQL || 3306
export const DATABASE =process.env.DATABASE || "test"
export const PORT =process.env.PORT || 3001

