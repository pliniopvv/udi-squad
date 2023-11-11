
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    userId: number;

    @Column({
        unique: true
    })
    username: String;

    @Column()
    password: String;

}
