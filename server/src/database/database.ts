import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User} from "./entities/User";
import { ReservedHours } from "./entities/ReservedHours";
import { Court } from "./entities/Court";

dotenv.config();

// @ts-ignore
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User, Court, ReservedHours],
    synchronize: true
});

export function initialiseDatabase() {
    AppDataSource.initialize()
        .then(() => {
            console.log('Data Source has been initialized!');
        })
        .catch((err) => {
            console.error('Error during Data Source initialization:', err);
        });
}
