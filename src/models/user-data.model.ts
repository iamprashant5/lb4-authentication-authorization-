import {Entity, model, property} from '@loopback/repository';
import { Permissions } from 'loopback4-authorization';

@model()
export class UserData extends Entity implements Permissions<string> {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  realm: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'boolean',
    required: true,
  })
  emailVerification: boolean;

  @property({
    type: 'string',
    required: true,
  })
  verificationToken: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;
  @property({
    type:'array',
    itemType:'string'
  })
    permissions:string[];

  constructor(data?: Partial<UserData>) {
    super(data);
  }
}

export interface UserDataRelations {
  // describe navigational properties here
}

export type UserDataWithRelations = UserData & UserDataRelations;
