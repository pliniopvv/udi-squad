import { Foto } from "./foto";
import { User } from "./user";

export class UserComplements {
  id?: number;
  nome: string;
  foto_perfil: Foto;
  user?: User | { id: number };
}
