export declare class DatabaseFactory {
    static buildSQLite(): import("@nestjs/common").DynamicModule;
    static buildPostgreeSQL(): import("@nestjs/common").DynamicModule;
    static autoConfig(): import("@nestjs/common").DynamicModule;
}
