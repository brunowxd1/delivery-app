import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/db/prisma/prisma.service';
import { HashService } from 'src/shared/services/hash.service';
import { LoginUserInput } from 'src/shared/types/graphql';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthorizationService {
  constructor(
    private hashService: HashService,
    private prisma: PrismaService,
    private jwtTokenService: JwtService,
  ) {}

  login = async ({ email, password }: LoginUserInput) => {
    const user = await this.prisma.user.findUnique({ where: { email } });

    console.log(user);
    if (!user)
      throw new HttpException('Wrong credentials', HttpStatus.BAD_REQUEST);

    const passwordMathes = await this.hashService.compare(
      user.password,
      password,
    );

    if (!passwordMathes)
      throw new HttpException('Wrong credentials', HttpStatus.BAD_REQUEST);

    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };

    const access_token = this.jwtTokenService.sign(payload);

    return { access_token };
  };
}
