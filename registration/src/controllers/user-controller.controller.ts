import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories';
import { User } from '../models';
import { post, requestBody } from '@loopback/rest';

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) {}

  @post('/users')
  async createUser(@requestBody() user: User): Promise<User> {
    // Use the userRepository to create a user
    return this.userRepository.create(user);
  }
  // You can add more controller methods here as needed
}
