import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';

@Injectable()
export class HashService {
  private saltRounds = 10;

  hashString = async (plainStr: string) => {
    return await hash(plainStr, this.saltRounds);
  };

  compare = async (hashedStr: string, plainStr: string) => {
    return await compare(plainStr, hashedStr);
  };
}
