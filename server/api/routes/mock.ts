import Router from 'koa-router'
import {QueryUser,webhook} from '../../controllers/test'
const router = new Router()

router.prefix('/test')

router.get('/user',QueryUser)

router.post('/api/github/webhook',webhook)
export default router