import KoaRouter from 'koa-router';
import home from './controllers/home';

const router = new KoaRouter();
router.get('/', home);

export default router;
