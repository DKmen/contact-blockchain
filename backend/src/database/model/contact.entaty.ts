/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Contact { 
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    sender: string

    @Column()
    firstName: string

    @Column()
    secondName: string

    @Column()
    contact: string

    @Column()
    countryCode: string

}