import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/resources/prisma/prisma.service';
import { CreateUserInput, UpdateUserInput } from 'src/types/graphql';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create({ address, email, name, phoneNumber }: CreateUserInput) {
    return this.prisma.user.create({
      data: { address, email, name, phoneNumber },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: string, { address, email, name, phoneNumber }: UpdateUserInput) {
    return this.prisma.user.update({
      where: { id },
      data: { address, email, name, phoneNumber },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
