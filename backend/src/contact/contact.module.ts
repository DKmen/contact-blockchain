/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common"
import { ContactController } from "./contact.controller";
import { ContactService } from "./contact.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Contact } from "src/database/model/contact.entaty";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { CacheInterceptor } from "@nestjs/cache-manager";

@Module({
    imports: [TypeOrmModule.forFeature([Contact])],
    providers: [ContactService, {
        provide: APP_INTERCEPTOR,
        useClass: CacheInterceptor,
    }
    ],
    controllers: [ContactController]
})
export class ContactModule { }