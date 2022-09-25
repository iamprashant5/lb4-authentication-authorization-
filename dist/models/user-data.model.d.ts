import { Entity } from '@loopback/repository';
export declare class UserData extends Entity {
    id: string;
    realm: string;
    username: string;
    email: string;
    emailVerification: boolean;
    verificationToken: string;
    password: string;
    constructor(data?: Partial<UserData>);
}
export interface UserDataRelations {
}
export declare type UserDataWithRelations = UserData & UserDataRelations;
