import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from 'process';
import { User } from './users/user.entity';

let entidades = [User];

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