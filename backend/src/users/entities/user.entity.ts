
import { Feedcard } from 'src/feedcard/entities/feedcard.entity';
import { UserComplement } from 'src/user-complements/entities/user-complement.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    username: String;

    @Column({ select: false })
    password: String;

    @OneToMany((type) => Feedcard, (feedcard) => feedcard.user)
    postagens: Feedcard[];

    @OneToOne((type) => UserComplement, (uC) => uC.user, {
        eager: true
    })
    complements: UserComplement;

}
