import { Options } from 'Sequelize/types'
export interface IMysqlConfig extends Options{
}
export const mysqlConfig: IMysqlConfig = {
    database: 'rhino',
    host: '118.31.47.24',
    port: 3306,
    username: 'root',
    password: 'mj120926',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
}

