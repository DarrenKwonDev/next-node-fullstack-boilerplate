import { ConnectionOptions } from 'typeorm';

const env = process.env.NODE_ENV;

// connection option은 공식문서 https://typeorm.io/#/connection-options 에서 확인 가능

const connectionOptions: ConnectionOptions = {
  name: 'hyperlink',
  type: 'mysql',
  host: process.env.DB_ENDPOINT,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'hyperlink',
  synchronize: env === 'development' ? true : false,
  logging: true,
  entities: ['../entities/**/*.*'],
};

export default connectionOptions;
