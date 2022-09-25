import { Entity } from '@loopback/repository';
import { Permissions } from 'loopback4-authorization';
export declare class UserData extends Entity implements Permissions<string> {
    id: string;
    realm: string;
    username: string;
    email: string;
    emailVerification: boolean;
    verificationToken: string;
    password: string;
    permissions: string[];
    constructor(data?: Partial<UserData>);
}
export interface UserDataRelations {
}
export declare type UserDataWithRelations = UserData & UserDataRelations;
