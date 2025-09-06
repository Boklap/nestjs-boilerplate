import { config as loadEnv } from 'dotenv';
import { join } from 'path';
import { Example } from '../../modules/examples/entities/example.entity';
import { DataSource } from 'typeorm';

loadEnv({ path: join(__dirname, '../../../.env.dev') });

export default new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [
        Example
    ],
    migrations: [__dirname + '/migrations/*.ts'], // In production change to dist/ directory and .js extension
    synchronize: false,
    logging: true
})