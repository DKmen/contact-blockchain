/* eslint-disable prettier/prettier */
import { genSaltSync, hashSync, compareSync } from "bcryptjs"

export class Hashing {

    static salt = genSaltSync(parseInt(process.env.SALT) || 10);

    static encrypt(txt: string): string {
        return hashSync(txt, this.salt);
    }

    static compare(has: string, txt: string): boolean {
        return compareSync(txt, has)
    }
}