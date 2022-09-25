"use strict";
// Copyright IBM Corp. and LoopBack contributors 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySequence = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const loopback4_authorization_1 = require("loopback4-authorization");
const repositories_1 = require("./repositories");
// import { Send } from 'express-serve-static-core';
// ------------------------------------
let MySequence = class MySequence {
    constructor(
    // ---- ADD THIS LINE ------
    authenticateRequest, findRoute, parseParams, invoke, send, reject, checkAuthorisation, userDataRepository) {
        this.authenticateRequest = authenticateRequest;
        this.findRoute = findRoute;
        this.parseParams = parseParams;
        this.invoke = invoke;
        this.send = send;
        this.reject = reject;
        this.checkAuthorisation = checkAuthorisation;
        this.userDataRepository = userDataRepository;
    }
    async handle(context) {
        try {
            const { request, response } = context;
            const route = this.findRoute(request);
            // - enable jwt auth -
            // call authentication action
            // ---------- ADD THIS LINE -------------
            const args = await this.parseParams(request, route);
            const authUser = await this.authenticateRequest(request);
            if (authUser) {
                const usrData = await this.userDataRepository.findOne({ where: { id: authUser.id } });
                authUser.permissions = usrData === null || usrData === void 0 ? void 0 : usrData.permissions;
            }
            const isAccessAllowed = await this.checkAuthorisation(authUser.permissions, // do authUser.permissions if using method #1
            request);
            //    console.log(authUser,'auth',authUser.permissions)
            // Checking access to route here
            if (!isAccessAllowed) {
                throw new rest_1.HttpErrors.Forbidden("NotAllowedAccess" /* AuthorizeErrorKeys.NotAllowedAccess */);
            }
            const result = await this.invoke(route, args);
            this.send(response, result);
        }
        catch (err) {
            console.log(err);
            // ---------- ADD THIS SNIPPET -------------
            // if error is coming from the JWT authentication extension
            // make the statusCode 401
            if (err.code === authentication_1.AUTHENTICATION_STRATEGY_NOT_FOUND ||
                err.code === authentication_1.USER_PROFILE_NOT_FOUND) {
                Object.assign(err, { statusCode: 401 /* Unauthorized */ });
            }
            // ---------- END OF SNIPPET -------------
            this.reject(context, err);
        }
    }
};
MySequence = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)(authentication_1.AuthenticationBindings.AUTH_ACTION)),
    tslib_1.__param(1, (0, core_1.inject)(rest_1.SequenceActions.FIND_ROUTE)),
    tslib_1.__param(2, (0, core_1.inject)(rest_1.SequenceActions.PARSE_PARAMS)),
    tslib_1.__param(3, (0, core_1.inject)(rest_1.SequenceActions.INVOKE_METHOD)),
    tslib_1.__param(4, (0, core_1.inject)(rest_1.SequenceActions.SEND)),
    tslib_1.__param(5, (0, core_1.inject)(rest_1.SequenceActions.REJECT)),
    tslib_1.__param(6, (0, core_1.inject)(loopback4_authorization_1.AuthorizationBindings.AUTHORIZE_ACTION)),
    tslib_1.__param(7, (0, repository_1.repository)(repositories_1.UserDataRepository)),
    tslib_1.__metadata("design:paramtypes", [Function, Function, Function, Function, Function, Function, Function, repositories_1.UserDataRepository])
], MySequence);
exports.MySequence = MySequence;
//# sourceMappingURL=sequence.js.map