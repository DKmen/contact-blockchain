/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './database/model/contact.entaty';
import { ContactModule } from './contact/contact.module';
import { CacheModule } from '@nestjs/cache-manager';


@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: (process.env['TYPE'] as 'postgres' | 'mysql') || 'postgres',
    host: process.env['HOST'] || 'localhost',
    port: (process.env['PORT'] as unknown as number) || 3000,
    username: process.env['USER_NAME'] || 'postgres',
    password: process.env['PASSWORD'] || 'postgrespw',
    database: process.env['DATABASE'] || 'postgres',
    entities: [Contact],
    synchronize: true
  }), ContactModule, CacheModule.register({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
