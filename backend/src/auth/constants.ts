import { env } from "process";

export const jwtConstants = {
    secret: env.SECRET_JWT_TOKEN,
  };