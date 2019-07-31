import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import compose from 'koa-compose'
import compress from 'koa-compress'
import response from './response'

export default function middleware() {
    return compose(
        [
            logger(),
            bodyParser(),
            response(),
            compress({
                filter: (contentType: string) => !/event-stream/i.test(contentType)
            })
        ].map(convert)
    )
}
