import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/resources/prisma/prisma.service';
import { CreateCustomerInput, UpdateCustomerInput } from 'src/types/graphql';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  create({ address, email, name, phoneNumber }: CreateCustomerInput) {
    return this.prisma.customer.create({
      data: { address, email, name, phoneNumber },
    });
  }

  findAll() {
    return this.prisma.customer.findMany();
  }

  findOne(id: string) {
    return this.prisma.customer.findUnique({ where: { id } });
  }

  update(
    id: string,
    { address, email, name, phoneNumber }: UpdateCustomerInput,
  ) {
    return this.prisma.customer.update({
      where: { id },
      data: { address, email, name, phoneNumber },
    });
  }

  remove(id: string) {
    return this.prisma.customer.delete({ where: { id } });
  }
}
