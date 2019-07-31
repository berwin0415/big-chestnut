import compose from 'koa-compose';
import convert from 'koa-convert';
import { MiddlewareFunc } from "../types";



export default function convertCompose(arr:MiddlewareFunc[]) {
    return compose(arr.map(convert))
}