/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";

export class FilterDto {
    @IsNotEmpty({ message: 'Sender Is Not Empty' })
    sender: string

    @IsOptional()
    @MinLength(2)
    @MaxLength(2)
    countryCode?: string
}