import { SoftDeleteEntity } from 'loopback4-soft-delete';
export declare class Todo extends SoftDeleteEntity {
    id?: number;
    title: string;
    desc?: string;
    isComplete?: boolean;
    remindAtAddress?: string;
    remindAtGeo?: string;
    tag?: any;
    string?: string;
    constructor(data?: Partial<Todo>);
}
export interface TodoRelations {
}
export declare type TodoWithRelations = Todo & TodoRelations;
