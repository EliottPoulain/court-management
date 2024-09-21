import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ReservedHours } from './ReservedHours';

@Entity()
export class Court {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name!: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    type!: string;

    @OneToMany(() => ReservedHours, (reservedHours) => reservedHours.court)
    reservedHours!: ReservedHours[];
}
