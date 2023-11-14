import { Foto } from "src/foto/entities/foto.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserComplement {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    nome: String;

    @OneToOne((type) => User, (user) => user.complements)
    @JoinColumn()
    user: User;

    @OneToOne((type) => Foto, (foto) => foto.complements)
    foto_perfil: Foto;
}
