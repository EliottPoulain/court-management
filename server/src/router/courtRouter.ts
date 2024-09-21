// src/routes/UserRouter.ts

import { Router } from 'express';
import { createUser, getUsers, getUserById } from '../database/user';
import {createCourt, getCourtById, getCourts} from "../database/court";

const router = Router();

router.post('/', createCourt);
router.get('/', getCourts);
router.get('/:id', getCourtById);

export default router;
