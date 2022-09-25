import { AuthenticateFn } from '@loopback/authentication';
import { RequestContext, SequenceHandler, FindRoute, Send, ParseParams, InvokeMethod, Reject } from '@loopback/rest';
export declare class MySequence implements SequenceHandler {
    protected authenticateRequest: AuthenticateFn;
    protected findRoute: FindRoute;
    protected parseParams: ParseParams;
    protected invoke: InvokeMethod;
    protected send: Send;
    protected reject: Reject;
    constructor(authenticateRequest: AuthenticateFn, findRoute: FindRoute, parseParams: ParseParams, invoke: InvokeMethod, send: Send, reject: Reject);
    handle(context: RequestContext): Promise<void>;
}
