import { Middleware } from "koa";
import Users from '../model/users'

export const QueryUser:Middleware = async (ctx,next) => {
    // Users.findAll().then((res:any) => {
    //     ctx.body = res
    // })
    await Users.create<Users>({
        username:"aaa",
        password:"bbb"
    })
    ctx.body={
        code:200,
        message:'ok'
    }
}