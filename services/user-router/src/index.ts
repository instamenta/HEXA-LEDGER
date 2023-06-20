import EXPRESS, {Express} from 'express';
import CORS from 'cors';
import AUTH_ROUTER from './routes/auth-routes';
import USER_ROUTER from './routes/user-routes';
import COOKIER_PARSER from 'cookie-parser';
import ERROR_MIDDLEWARE from './middlewares/error-middleware';

const API_PORT: string = process.env.ROUTER_PORT || '5065';
const API: Express = EXPRESS();

API.use(CORS());
API.use(COOKIER_PARSER());
API.use(EXPRESS.json());

API.use('/auth', AUTH_ROUTER);
API.use('/user', USER_ROUTER);
API.use(ERROR_MIDDLEWARE);

(async function initializeService(): Promise<void> {
	await API.listen(Number(API_PORT), () => {
		console.log(`Server is running on port: ${API_PORT}`);
	});
	API.on('error', (error: Error | any) => {
		console.log('API ran into Error:', error);
	});
})().catch(error => console.log(error));

['unhandledRejection', 'uncaughtException'].forEach(type => {
	process.on(type, (error: Error) => {
		try {
			console.error(`process.on ${type}`);
			console.error(error);
		} catch {
			process.exit(1);
		}
	});
});

['SIGTERM', 'SIGINT', 'SIGUSR2'].forEach(type => {
	process.once(type, (error: Error) => {
		try {
			console.error(`process.on ${type}`, error);
			process.exit(0);
		} finally {
			process.kill(process.pid, type);
		}
	});
});
