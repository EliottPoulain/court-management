import { Request, Response } from 'express';
import { AppDataSource } from './database';
import { ReservedHours } from './entities/ReservedHours';
import { Court } from './entities/Court';
import { User } from './entities/User';
import { In } from "typeorm";

const reservedHoursRepository = AppDataSource.getRepository(ReservedHours);
const courtRepository = AppDataSource.getRepository(Court);
const userRepository = AppDataSource.getRepository(User);

export const createReservedHours = async (req: Request, res: Response) => {
    const { courtId, date, hours, duration, userIds } = req.body;

    try {
        const court = await courtRepository.findOneBy({id: courtId });
        if (!court) return res.status(404).json({ message: 'Court not found' });

        const users = await userRepository.findBy({id : In(userIds)});
        if (!users || users.length === 0) return res.status(404).json({ message: 'Users not found' });

        const reservedHours = reservedHoursRepository.create({
            court, date, hours, duration, users
        });

        await reservedHoursRepository.save(reservedHours);
        return res.status(201).json(reservedHours);
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la création de la réservation', error });
    }
};

export const getReservedHours = async (req: Request, res: Response) => {
    try {
        const reservedHours = await reservedHoursRepository.find({ relations: ['court', 'users'] });
        return res.status(200).json(reservedHours);
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la récupération des réservations', error });
    }
};

export const getReservedHourById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const reservedHours = await reservedHoursRepository.findOneBy({ id: id });
        return res.status(200).json(reservedHours);
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la récupération des réservations', error });
    }
};
