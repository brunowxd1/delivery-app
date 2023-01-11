import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateCustomerInput, UpdateCustomerInput } from 'src/types/graphql';
import { CustomerService } from './customer.service';

@Resolver('Customer')
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Mutation('createCustomer')
  create(
    @Args('createCustomerInput') createCustomerInput: CreateCustomerInput,
  ) {
    return this.customerService.create(createCustomerInput);
  }

  @Query('customers')
  findAll() {
    return this.customerService.findAll();
  }

  @Query('customer')
  findOne(@Args('id') id: string) {
    return this.customerService.findOne(id);
  }

  @Mutation('updateCustomer')
  update(
    @Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput,
  ) {
    return this.customerService.update(
      updateCustomerInput.id,
      updateCustomerInput,
    );
  }

  @Mutation('removeCustomer')
  remove(@Args('id') id: string) {
    return this.customerService.remove(id);
  }
}
