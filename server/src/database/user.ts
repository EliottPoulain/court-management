import { Request, Response } from 'express';
import { AppDataSource } from "./database";
import { User } from './entities/User';

const userRepository = AppDataSource.getRepository(User);

export const createUser = async (req: Request, res: Response) => {
    const { lastname, firstname, email, password } = req.body;

    try {
        const newUser = userRepository.create({ lastname, firstname, email, password });
        await userRepository.save(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userRepository.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    try {
        // const user = await userRepository.findOneBy({id: id});
        const user = await userRepository.findOneBy({ id: id });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
