import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/prisma/prisma.service';
import { CreateUserInput, UpdateUserInput } from 'src/shared/types/graphql';
import { HashService } from 'src/shared/services/hash.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private hashService: HashService,
  ) {}

  create = async ({
    address,
    email,
    name,
    phoneNumber,
    password,
  }: CreateUserInput) => {
    const hashedPassword = await this.hashService.hashString(password);

    return this.prisma.user.create({
      data: { address, email, name, phoneNumber, password: hashedPassword },
    });
  };

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

  updatePassword = async (
    id: string,
    oldPassword: string,
    newPassword: string,
  ) => {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);

    const passwordMathes = await this.hashService.compare(
      user.password,
      oldPassword,
    );

    if (!passwordMathes)
      throw new HttpException(
        'The provided new password does not match with the old password',
        HttpStatus.BAD_REQUEST,
      );

    const newHashedPassword = await this.hashService.hashString(newPassword);

    return this.prisma.user.update({
      where: { id },
      data: { password: newHashedPassword },
    });
  };

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
