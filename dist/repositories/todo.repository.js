"use strict";
// Copyright IBM Corp. and LoopBack contributors 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const loopback4_soft_delete_1 = require("loopback4-soft-delete");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let TodoRepository = class TodoRepository extends loopback4_soft_delete_1.SoftCrudRepository {
    constructor(dataSource) {
        super(models_1.Todo, dataSource);
    }
};
TodoRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.postgres')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PostgresDataSource])
], TodoRepository);
exports.TodoRepository = TodoRepository;
//# sourceMappingURL=todo.repository.js.map