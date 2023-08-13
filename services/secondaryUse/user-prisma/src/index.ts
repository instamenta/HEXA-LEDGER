import EXPRESS, {Express} from 'express';
import CORS from 'cors';
import COOKIER_PARSER from 'cookie-parser';
// import AUTH_ROUTER from './routes/authRoutes';
// import USER_ROUTER from './routes/userRoutes';
// import PROFILE_ROUTER from './routes/profileRoutes';
// import ERROR_MIDDLEWARE from './middleware/middleware';

import {PrismaClient}  from "@prisma/client";

const ROUTER_PORT = process.env.ROUTER_PORT || '5045';
const SERVICE_NAME = process.env.SERVICE_NAME || 'user-prisma';

const API: Express = EXPRESS();

API.use(CORS());
API.use(COOKIER_PARSER());
API.use(EXPRESS.json());

// API.use('/auth', AUTH_ROUTER);
// API.use('/user', USER_ROUTER);
// API.use('/profile', PROFILE_ROUTER);
// API.use(ERROR_MIDDLEWARE);

(async function INITIALIZE_SERVICE() {

    const prisma = new PrismaClient();

    prisma.$queryRaw`ALTER TABLE "_Followers" DROP CONSTRAINT "fk_user_followers";`;
    return

    await API.listen(Number(ROUTER_PORT), () => {
        console.log(`${SERVICE_NAME}  is running on port: ${ROUTER_PORT}`);
    });
    API.on('error', (error: Error | any) => {
        console.log(`${SERVICE_NAME}:${ROUTER_PORT} ran into Error:`, error);
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