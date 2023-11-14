import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { DatabaseFactory } from './DatabaseFactory';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { FeedcardModule } from './feedcard/feedcard.module';
import { UserComplementsModule } from './user-complements/user-complements.module';
import { FotoModule } from './foto/foto.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseFactory.autoConfig(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public_html'),
    }),
    AuthModule,
    UsersModule,
    FeedcardModule,
    UserComplementsModule,
    FotoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
