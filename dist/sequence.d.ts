import { AuthenticateFn } from '@loopback/authentication';
import { RequestContext, SequenceHandler, FindRoute, Send, ParseParams, InvokeMethod, Reject } from '@loopback/rest';
import { AuthorizeFn } from 'loopback4-authorization';
import { UserDataRepository } from './repositories';
export declare class MySequence implements SequenceHandler {
    protected authenticateRequest: AuthenticateFn;
    protected findRoute: FindRoute;
    protected parseParams: ParseParams;
    protected invoke: InvokeMethod;
    protected send: Send;
    protected reject: Reject;
    protected checkAuthorisation: AuthorizeFn;
    protected userDataRepository: UserDataRepository;
    constructor(authenticateRequest: AuthenticateFn, findRoute: FindRoute, parseParams: ParseParams, invoke: InvokeMethod, send: Send, reject: Reject, checkAuthorisation: AuthorizeFn, userDataRepository: UserDataRepository);
    handle(context: RequestContext): Promise<void>;
}
