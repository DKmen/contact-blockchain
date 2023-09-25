/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class ContactDto {
    @IsNotEmpty({ message: 'Sender Is Not Empty' })
    sender: string
    @IsNotEmpty({ message: 'First Name Is Not Empty' })
    firstName: string;
    @IsNotEmpty({ message: 'Second Name Is Not Empty' })
    secondName: string;
    @IsNotEmpty({ message: "Contact is not empty" })
    @MinLength(10)
    @MaxLength(10)
    contact: string;
    @IsNotEmpty({ message: "Contact code is not empty" })
    @MinLength(2)
    @MaxLength(2)
    countryCode: string
}