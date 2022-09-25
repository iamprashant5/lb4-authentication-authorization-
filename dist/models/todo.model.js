"use strict";
// Copyright IBM Corp. and LoopBack contributors 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const loopback4_soft_delete_1 = require("loopback4-soft-delete");
let Todo = class Todo extends loopback4_soft_delete_1.SoftDeleteEntity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: false,
    }),
    tslib_1.__metadata("design:type", Number)
], Todo.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Todo.prototype, "title", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Todo.prototype, "desc", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'boolean',
    }),
    tslib_1.__metadata("design:type", Boolean)
], Todo.prototype, "isComplete", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Todo.prototype, "remindAtAddress", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Todo.prototype, "remindAtGeo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'any',
    }),
    tslib_1.__metadata("design:type", Object)
], Todo.prototype, "tag", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Todo.prototype, "string", void 0);
Todo = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            postgresql: { schema: 'public', table: 'todo' },
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Todo);
exports.Todo = Todo;
//# sourceMappingURL=todo.model.js.map