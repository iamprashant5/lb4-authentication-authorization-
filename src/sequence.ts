// Copyright IBM Corp. and LoopBack contributors 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {
    AuthenticateFn,
    AuthenticationBindings,
    AUTHENTICATION_STRATEGY_NOT_FOUND,
    USER_PROFILE_NOT_FOUND,
  } from '@loopback/authentication';
import { inject } from '@loopback/core';
import { RequestContext, SequenceHandler,FindRoute, Send,ParseParams, InvokeMethod, Reject, SequenceActions, } from '@loopback/rest';
// import { Send } from 'express-serve-static-core';
  // ------------------------------------
  export class MySequence implements SequenceHandler {
    constructor(
      // ---- ADD THIS LINE ------
      @inject(AuthenticationBindings.AUTH_ACTION)
      protected authenticateRequest: AuthenticateFn,
      @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
    @inject(SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
    @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
    @inject(SequenceActions.SEND) protected send: Send,
    @inject(SequenceActions.REJECT) protected reject: Reject,
    ) {}
    async handle(context: RequestContext) {
      try {
        const {request, response} = context;
        const route = this.findRoute(request);
        // - enable jwt auth -
        // call authentication action
        // ---------- ADD THIS LINE -------------
        await this.authenticateRequest(request);
        const args = await this.parseParams(request, route);
        const result = await this.invoke(route, args);
        this.send(response, result);
      } catch (err) {
        // ---------- ADD THIS SNIPPET -------------
        // if error is coming from the JWT authentication extension
        // make the statusCode 401
        if (
          err.code === AUTHENTICATION_STRATEGY_NOT_FOUND ||
          err.code === USER_PROFILE_NOT_FOUND
        ) {
          Object.assign(err, {statusCode: 401 /* Unauthorized */});
        }
        // ---------- END OF SNIPPET -------------
        this.reject(context, err);
      }
    }
  }
  
