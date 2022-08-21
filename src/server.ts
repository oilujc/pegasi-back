import App from '@/app';
import validateEnv from '@utils/validateEnv';
import UsersRoute from './infrastructure/rest/routes/users.route';

validateEnv();

const app = new App([new UsersRoute()]);

app.listen();
