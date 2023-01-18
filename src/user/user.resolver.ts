import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Public } from 'src/shared/decorators/publicRoute.decorator';
import {
  CreateUserInput,
  UpdatePasswordInput,
  UpdateUserInput,
} from 'src/shared/types/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('createUser')
  @Public()
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query('users')
  findAll() {
    return this.userService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: string) {
    return this.userService.remove(id);
  }

  @Mutation('updateUserPassword')
  updatePassword(
    @Args('updateUserPasswordInput')
    { id, oldPassword, newPassword }: UpdatePasswordInput,
  ) {
    return this.userService.updatePassword(id, oldPassword, newPassword);
  }
}
