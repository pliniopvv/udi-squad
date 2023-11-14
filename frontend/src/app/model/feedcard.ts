import { UserComplements } from './user-complements';
import { User } from "./user";

export class Feedcard {
  id: Number;
  body: String;
  created_at: Date;
  user?: User;
}
