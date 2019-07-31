import * as path from 'path'
import Koa from 'koa'
import koaStatic from 'koa-static'
import onerror from 'koa-onerror';
import baseConfig from '../configs'
import composedMiddleware from '../middleware'
import api from '../api'

const createServer = async () => {
    const app = new Koa()

    app.use(composedMiddleware())

    onerror(app)
    
    app.use(koaStatic(path.join(__dirname, '../static')))

    const routes = await api()

    app.use(routes)

    app.listen(baseConfig.app.port, () => {
        console.log('server running at ' + baseConfig.app.port)
    })
}
export default createServer
