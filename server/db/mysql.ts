import { Sequelize } from 'sequelize'
import { mysqlConfig } from '../configs'

const { database, username, password, ...otherOptions } = mysqlConfig
const sequelize = new Sequelize(database!, username!, password, otherOptions)

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch((err: Error) => {
        console.error('Unable to connect to the database:', err)
    })

export default sequelize
