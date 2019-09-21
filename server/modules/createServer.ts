import * as path from 'path'
import Koa from 'koa'
import koaStatic from 'koa-static'
import onerror from 'koa-onerror';
import {appConfig} from '../configs'
import composedMiddleware from '../middleware'
import api from '../api'
import Users from '../model/users'

const createServer = async () => {
    Users.sync({
        force: true
    }).then(() => {
        console.log('User Table has been created')
    })
    
    const app = new Koa()

    app.use(composedMiddleware())

    onerror(app)
    
    app.use(koaStatic(path.join(__dirname, '../static')))

    const routes = await api()

    app.use(routes)

    app.listen(appConfig.port, () => {
        console.log('server running at ' + appConfig.port)
    })
}
export default createServer
