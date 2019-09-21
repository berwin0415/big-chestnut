import db from '../db/mysql'
import { STRING, Model, INTEGER } from 'sequelize'
class Users extends Model {}

Users.init(
    {
        id: {
            type: INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            field: 'user_name',
            type: STRING,
            allowNull: false
        },
        password: {
            field: 'password',
            type: STRING,
            allowNull: false
        }
    },
    {
        sequelize: db,
        createdAt: 'create_time',
        updatedAt: 'update_time',
        tableName: 'users',
        initialAutoIncrement: '10000'
    }
)
// const Users = db.define(
//     'users',
//     {
//         id: {
//             type: STRING,
//             allowNull: false,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         username: {
//             field: 'user_name',
//             type: STRING,
//             allowNull: false
//         },
//         password: {
//             field: 'password',
//             type: STRING,
//             allowNull: false
//         }
//     },
//     {
//         createdAt: 'create_time',
//         updatedAt: 'update_time',
//         tableName: 'document_repo'
//     }
// )

export default Users
