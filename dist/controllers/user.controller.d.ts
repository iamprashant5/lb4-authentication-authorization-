import { TokenService } from '@loopback/authentication';
import { Credentials, MyUserService, User, UserRepository } from '@loopback/authentication-jwt';
import { SchemaObject } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
import { UserDataRepository } from '../repositories';
export declare class NewUserRequest extends User {
    password: string;
}
export declare const CredentialsRequestBody: {
    description: string;
    required: boolean;
    content: {
        'application/json': {
            schema: SchemaObject;
        };
    };
};
export declare class UserController {
    jwtService: TokenService;
    userService: MyUserService;
    user: UserProfile;
    protected userRepository: UserRepository;
    protected userDataRepository: UserDataRepository;
    constructor(jwtService: TokenService, userService: MyUserService, user: UserProfile, userRepository: UserRepository, userDataRepository: UserDataRepository);
    login(credentials: Credentials): Promise<{
        token: string;
    }>;
    whoAmI(currentUserProfile: UserProfile): Promise<string>;
    signUp(newUserRequest: NewUserRequest): Promise<User>;
}
