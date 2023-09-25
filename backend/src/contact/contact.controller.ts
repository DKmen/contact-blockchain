/* eslint-disable prettier/prettier */
import { Controller, Post, Body, UseInterceptors } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { ContactDto } from "./dto/country.dto";
import { CacheInterceptor } from "@nestjs/cache-manager";
import Moralis from 'moralis';
import { FilterDto } from "./dto/filter.dto";

@UseInterceptors(CacheInterceptor)
@Controller('contact')
export class ContactController {

    constructor(private contactService: ContactService) {
    }

    @Post()
    async addContact(@Body() contact: any) {
        const decodeContact: ContactDto = Moralis.Streams.parsedLogs<ContactDto>(contact)[0];
        console.log(decodeContact)
        return await this.contactService.createContact(decodeContact);
    }

    @Post('get-details')
    async fetchContact(@Body() filters: FilterDto) {
        return await this.contactService.getAllContact(filters)
    }
}