import EXPRESS, {Express} from 'express';
import CORS from 'cors';
import POST_ROUTER from './routes/post-routes';
import COOKIER_PARSER from 'cookie-parser';
import ERROR_MIDDLEWARE from './middleware/error-middleware';
// import {connectProducer} from './producer';

const API_PORT: string = process.env.ROUTER_PORT || '5095';
const SERVICE_NAME: string = process.env.SERVICE_NAME || 'Post-Router-Service';
const API: Express = EXPRESS();

API.use(CORS());
API.use(COOKIER_PARSER());
API.use(EXPRESS.json());

API.use('/post', POST_ROUTER);

API.use(ERROR_MIDDLEWARE);

(async function initializeService(): Promise<void> {
	await API.listen(Number(API_PORT), async () => {
		console.log(`${SERVICE_NAME} is running on port: ${API_PORT}`);
		// await connectProducer();
	});
	API.on('error', (error: Error | any) => {
		console.log('API ran into Error:', error);
	});
})().catch(error => console.log(error));

['unhandledRejection', 'uncaughtException'].forEach(type => {
	process.on(type, (error: Error) => {
		try {
			console.error(`${SERVICE_NAME} - process.on ${type}`);
			console.error(error);
		} catch {
			process.exit(1);
		}
	});
});

['SIGTERM', 'SIGINT', 'SIGUSR2'].forEach(type => {
	process.once(type, (error: Error) => {
		try {
			console.error(`${SERVICE_NAME} - process.on ${type}`, error);
			process.exit(0);
		} finally {
			process.kill(process.pid, type);
		}
	});
});
