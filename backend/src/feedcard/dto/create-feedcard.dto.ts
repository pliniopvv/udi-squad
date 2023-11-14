import { User } from "src/users/entities/user.entity";
import { Feedcard } from "../entities/feedcard.entity";

export class CreateFeedcardDto {
    titulo: String;
    body: String;
    user: User;
    created_at: Date;
}
