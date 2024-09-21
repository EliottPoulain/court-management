import express, { Request, Response } from 'express';
import {initialiseDatabase} from "./database/database";
import userRouter from './router/userRouter';

const app = express();
initialiseDatabase();
app.get('/', (req: Request, res: Response) => {
    res.send('Hello TypeScript with Express!');
});

app.use(express.json());
app.use("/user", userRouter);

app.listen(8000, () => {
    console.log(`Server is running at http://localhost:8000`);
});
