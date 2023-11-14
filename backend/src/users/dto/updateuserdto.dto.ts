import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDTO } from "./createuserdto.dto";

export class UpdateUserDTO  extends PartialType(CreateUserDTO) {

}