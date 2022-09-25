import { DefaultCrudRepository } from '@loopback/repository';
import { PostgresDataSource } from '../datasources';
import { UserData, UserDataRelations } from '../models';
export declare class UserDataRepository extends DefaultCrudRepository<UserData, typeof UserData.prototype.id, UserDataRelations> {
    constructor(dataSource: PostgresDataSource);
}
