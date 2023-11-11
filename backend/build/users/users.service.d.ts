import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    findByLogin(_username: String): Promise<User>;
    remove(id: number): Promise<void>;
    add(user: User): Promise<User>;
}
