import Koa from 'koa';
import router from './router';
import bodyParser from 'koa-bodyparser';

const app = new Koa();

app.use(bodyParser());
app.use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});