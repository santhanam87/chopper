import dotEnv from 'dotenv';
import startExpressServer from './server';

dotEnv.config();
startExpressServer();
