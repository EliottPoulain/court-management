import { Entity, PrimaryGeneratedColumn, Column,  } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255, nullable: false  })
    lastname!: string;

    @Column({ type: 'varchar', length: 255, nullable: false  })
    firstname!: string;

    @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
    email!: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    password!: string;
}
