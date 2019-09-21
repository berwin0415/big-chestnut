import Router from 'koa-router'
import {QueryUser} from '../../controllers/test'
const router = new Router()

router.prefix('/test')

router.get('/user',QueryUser)

export default router