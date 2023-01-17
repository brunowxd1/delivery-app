import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { HashService } from 'src/shared/services/hash.service';

@Module({
  providers: [UserResolver, UserService, HashService],
})
export class UserModule {}
