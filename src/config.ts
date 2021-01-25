export const PORT = Number(process.env.PORT) || 3000;
export const DBSP = process.env.CLOUD_SQL_CONNECTION_NAME ? `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}` : '';

export const HOST = process.env.HOST ? process.env.HOST.split(':')[0] : 'localhost';

export const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
