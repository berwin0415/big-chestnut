import * as fs from 'fs'
import * as path from 'path'
import compose from 'koa-compose'
import glob from 'glob'
import { IMiddleware } from 'koa-router'



export default async function api() {
    let routers: IMiddleware[] = []
    console.log(fs
        .readdirSync(path.resolve(__dirname, 'routes')))
    const router = await Promise.all(
        fs
            .readdirSync(path.resolve(__dirname, 'routes'))
            .filter((value: string) => value.indexOf('index') === -1)
            .map((routePath: string) => import(path.resolve(__dirname,'routes',routePath)))
    )

    router.forEach(item => {
        const router = item.default
        routers.push(router.routes())
        routers.push(router.allowedMethods())
    })

    return compose(routers)
}
