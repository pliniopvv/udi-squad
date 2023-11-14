import { UserComplement } from "src/user-complements/entities/user-complement.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Foto {

    @PrimaryGeneratedColumn()
    id: Number;
    
    @Column()
    arquivo: String;

    @OneToOne((type) => UserComplement, (uC) => uC.foto_perfil)
    @JoinColumn()
    complements: UserComplement;
}
