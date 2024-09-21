import express, { Request, Response } from 'express';
import {initialiseDatabase} from "./database/database";
import userRouter from './router/userRouter';
import courtRouter from "./router/courtRouter";
import reservedHoursRouter from "./router/reservedHoursRouter";

const app = express();
initialiseDatabase();
app.get('/', (req: Request, res: Response) => {
    res.send('Hello TypeScript with Express!');
});

app.use(express.json());
app.use("/user", userRouter);
app.use("/court", courtRouter);
app.use("/hours", reservedHoursRouter);

app.listen(8000, () => {
    console.log(`Server is running at http://localhost:8000`);
});
