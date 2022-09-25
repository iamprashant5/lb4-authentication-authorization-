import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {UserData, UserDataRelations} from '../models';

export class UserDataRepository extends DefaultCrudRepository<
  UserData,
  typeof UserData.prototype.id,
  UserDataRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(UserData, dataSource);
  }
}
