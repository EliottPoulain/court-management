import { Request, Response } from 'express';
import { AppDataSource } from './database';
import { Court } from './entities/Court';
import {User} from "./entities/User";

const courtRepository = AppDataSource.getRepository(Court);

export const createCourt = async (req: Request, res: Response) => {
    const { name, type } = req.body;

    try {
        const court = courtRepository.create({ name, type });
        await courtRepository.save(court);
        return res.status(201).json(court);
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la création du court', error });
    }
};

export const getCourts = async (req: Request, res: Response) => {
    try {
        const courts = await courtRepository.find();
        return res.status(200).json(courts);
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la récupération des courts', error });
    }
};

export const getCourtById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    try {
        const courts = await courtRepository.findOneBy({ id });
        return res.status(200).json(courts);
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la récupération des courts', error });
    }
};

