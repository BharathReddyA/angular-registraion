import { inject } from '@loopback/core';
import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { User, UserRelations } from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.userRegistration,
  UserRelations
> {
  constructor(
    @inject('datasources.registration') dataSource: juggler.DataSource,
  ) {
    super(User, dataSource);
  }
}
