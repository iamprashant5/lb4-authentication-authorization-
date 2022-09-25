import { SoftCrudRepository } from 'loopback4-soft-delete';
import { PostgresDataSource } from '../datasources';
import { Todo, TodoRelations } from '../models';
export declare class TodoRepository extends SoftCrudRepository<Todo, typeof Todo.prototype.id, TodoRelations> {
    constructor(dataSource: PostgresDataSource);
}
