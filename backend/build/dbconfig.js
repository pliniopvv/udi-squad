"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseFactory = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const process_1 = require("process");
const user_entity_1 = require("./users/user.entity");
let entidades = [user_entity_1.User];
class DatabaseFactory {
    static buildSQLite() {
        return typeorm_1.TypeOrmModule.forRoot({
            type: 'sqlite',
            database: process_1.env.DATABASE_URL,
            entities: entidades,
            synchronize: true
        });
    }
    static buildPostgreeSQL() {
        return typeorm_1.TypeOrmModule.forRoot({
            type: 'postgres',
            host: process_1.env.DATABASE_HOST,
            port: parseInt(process_1.env.DATABASE_PORT),
            username: process_1.env.DATABASE_USERNAME,
            password: process_1.env.DATABASE_PASSWORD,
            database: process_1.env.DATABASE_NAME,
            entities: entidades,
            synchronize: true,
        });
    }
    static autoConfig() {
        switch (process_1.env.TYPE_DB) {
            case 'SQLite':
                return this.buildSQLite();
                break;
            case 'PostgreeSQL':
                return this.buildPostgreeSQL();
                break;
        }
    }
}
exports.DatabaseFactory = DatabaseFactory;
//# sourceMappingURL=dbconfig.js.map