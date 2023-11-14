import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from 'process';
import { User } from './users/entities/user.entity';
import { Feedcard } from './feedcard/entities/feedcard.entity';
import { Foto } from './foto/entities/foto.entity';
import { UserComplement } from './user-complements/entities/user-complement.entity';

let entidades = [User, Feedcard, Foto, UserComplement];

export class DatabaseFactory {
    static buildSQLite() {
       return TypeOrmModule.forRoot({
            type: 'sqlite',
            database: env.DATABASE_URL,
            entities: entidades,
            synchronize: true
          })
    }

    static buildPostgreeSQL() {
      return TypeOrmModule.forRoot({
        type: 'postgres',
        host: env.DATABASE_HOST,
        port: parseInt(env.DATABASE_PORT),
        username: env.DATABASE_USERNAME,
        password: env.DATABASE_PASSWORD,
        database: env.DATABASE_NAME,
        entities: entidades,
        synchronize: true,
      });
    }

    static autoConfig() {
      switch (env.TYPE_DB) {
        case 'SQLite':
          return this.buildSQLite();
          break;
        case 'PostgreeSQL':
          return this.buildPostgreeSQL();
          break;
      }
    }
  }