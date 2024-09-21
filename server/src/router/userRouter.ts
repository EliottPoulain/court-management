// src/routes/UserRouter.ts

import { Router } from 'express';
import { createUser, getUsers, getUserById } from '../database/user';

const router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);

export default router;
