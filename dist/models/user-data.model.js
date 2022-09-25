"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserData = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let UserData = class UserData extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], UserData.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], UserData.prototype, "realm", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], UserData.prototype, "username", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], UserData.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserData.prototype, "emailVerification", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], UserData.prototype, "verificationToken", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], UserData.prototype, "password", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string'
    }),
    tslib_1.__metadata("design:type", Array)
], UserData.prototype, "permissions", void 0);
UserData = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], UserData);
exports.UserData = UserData;
//# sourceMappingURL=user-data.model.js.map