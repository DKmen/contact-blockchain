/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Equal, Repository } from 'typeorm';
import { ContactDto } from './dto/country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from 'src/database/model/contact.entaty';
import { FilterDto } from './dto/filter.dto';

@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>,
    ) { }

    async createContact(newContact: ContactDto) {
        let contact = new Contact();
        Object.keys(newContact).map((key) => {
            contact[key] = newContact[key];
        });
        contact = await this.contactRepository.save(contact);
        return {
            contact,
        };
    }

    async getAllContact(filters: FilterDto) {
        if (filters.countryCode) {
            return {
                contacts: await this.contactRepository.find({
                    where: {
                        sender: Equal(filters.sender),
                        countryCode: Equal(filters.countryCode),
                    },
                }),
            };
        } else {
            return {
                contacts: await this.contactRepository.find({
                    where: { sender: Equal(filters.sender) },
                }),
            };
        }
    }
}
