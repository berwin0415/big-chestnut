import { Context } from "koa";

export interface MiddlewareFunc {
    (ctx: Context, next:() => Promise<any>): Generator
}