import debug from 'debug'

const response = () => async (ctx: any, next: any) => {
    try {
        await next()

        
        ctx.body = ctx.body
            ? ctx.body
            : {
                  code: ctx.state.code === undefined ? 0 : ctx.state.code,
                  data: ctx.state.data === undefined ? { msg: '访问的url不存在' } : ctx.state.data
              }
    } catch (err) {
        debug('koa-weapp-demo')('Catch Error: %o', err)

        ctx.status = 200

        ctx.body = {
            code: -1,
            error: err && err.message ? err.message : err.toString()
        }
    }
}

export default response
