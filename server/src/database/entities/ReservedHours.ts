import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Court } from './Court';
import { User } from './User';

@Entity()
export class ReservedHours {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 10, nullable: false })
    date!: string;

    @Column({ type: 'varchar', length: 5, nullable: false })
    hours!: string;

    @Column({ type: 'float', nullable: false })
    duration!: number;

    @ManyToMany(() => User)
    @JoinTable({
        name: 'reservation_users',
        joinColumn: { name: 'reservedHoursId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'userId', referencedColumnName: 'id' }
    })
    users!: User[];

    @ManyToOne(() => Court, (court) => court.reservedHours, { onDelete: 'CASCADE' })
    court!: Court;
}
