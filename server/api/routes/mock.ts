import Router from 'koa-router'

const router = new Router()

router.prefix('/api')

router.get('/all',async (ctx,next)=>{
    await next()
    ctx.body = "hello mock module router"
})

export default router