/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { sign, verify } from "jsonwebtoken";

@Injectable()
export default class WebToken {

    public GenerateToken(id: string): string {
        return sign({ id: id }, process.env.SECRATE || "Sectat")
    }

    public Verigy(token: string): { id: string } {
        try {
            return verify(token, process.env.SECRATE || "Sectat") as { id: string }
        } catch (err) {
            throw new HttpException({ error: HttpStatus.FORBIDDEN, message: "Please Provide Valid Authancation Token" }, HttpStatus.FORBIDDEN)
        }
    }
}