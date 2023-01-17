import { Args, Resolver, Query} from '@nestjs/graphql';
import { LoginUserInput } from 'src/shared/types/graphql';
import { AuthorizationService } from './authorization.service';

@Resolver('Authorization')
export class AuthorizationResolver {
  constructor(private readonly authorizationService: AuthorizationService) {}

  @Query('login')
  login(@Args('loginInput') loginUserInput: LoginUserInput) {
    return this.authorizationService.login(loginUserInput);
  }
}
