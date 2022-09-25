// Copyright IBM Corp. and LoopBack contributors 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import { SoftCrudRepository } from 'loopback4-soft-delete';
import {DbDataSource, PostgresDataSource} from '../datasources';
import {Todo, TodoRelations} from '../models';

export class TodoRepository extends SoftCrudRepository<
  Todo,
  typeof Todo.prototype.id,
  TodoRelations
> {
  constructor(@inject('datasources.postgres') dataSource: PostgresDataSource) {
    super(Todo, dataSource);
  }
}
