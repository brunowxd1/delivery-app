import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CustomValidationPipe } from 'src/resources/pipes/CustomValidationPipe';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAll() {
    return this.customerService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.customerService.getOne(id);
  }

  @Post()
  create(
    @Body(new CustomValidationPipe()) userData: Prisma.CustomerCreateInput,
  ) {
    return this.customerService.createOne(userData);
  }
}
