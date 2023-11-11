import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    getAngular(response: any): void;
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
    testParam(req: any): Promise<{
        userId: number;
        username: String;
    }>;
}
