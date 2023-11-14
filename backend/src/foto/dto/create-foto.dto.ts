import { UserComplement } from "src/user-complements/entities/user-complement.entity";

export class CreateFotoDto {
    arquivo: String;
    complements: UserComplement;
}
