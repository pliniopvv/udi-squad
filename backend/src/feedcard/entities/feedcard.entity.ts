import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Feedcard {
    
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    body: String;

    @ManyToOne((type) => User, (user) => user.postagens)
    user: User;

    @Column()
    created_at: Date;
}
