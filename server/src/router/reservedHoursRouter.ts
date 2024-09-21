// src/routes/UserRouter.ts

import { Router } from 'express';
import {createReservedHours, getReservedHourById, getReservedHours} from "../database/reservedHours";

const router = Router();

router.post('/', createReservedHours);
router.get('/', getReservedHours);
router.get('/:id', getReservedHourById);

export default router;
