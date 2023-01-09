import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/resources/prisma.service';
import { Customer, Prisma } from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  getAll = async (): Promise<Customer[]> => {
    return await this.prisma.customer.findMany();
  };

  getOne = async (id: string): Promise<Customer> => {
    return await this.prisma.customer.findUnique({ where: { id } });
  };

  createOne = async (userData: Prisma.CustomerCreateInput): Promise<Customer> => {
    return await this.prisma.customer.create({ data: userData });
  };
}
