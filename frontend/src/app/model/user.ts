import { UserComplements } from "./user-complements";

export class User {
  public id: number = 0;
  public username: string = "";
  public password?: string;
  public complements?: UserComplements;
}
