
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserAddressInput {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    coordinates: string[];
}

export class UpdateUserAddressInput {
    street?: Nullable<string>;
    city?: Nullable<string>;
    state?: Nullable<string>;
    country?: Nullable<string>;
    zipCode?: Nullable<string>;
    coordinates?: Nullable<string[]>;
}

export class CreateUserInput {
    email: string;
    name: string;
    address: CreateUserAddressInput;
    phoneNumber: string;
}

export class UpdateUserInput {
    id: string;
    email?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<CreateUserAddressInput>;
    phoneNumber?: Nullable<string>;
}

export class User {
    id: string;
    email: string;
    name: string;
    address: AddressType;
    phoneNumber: string;
    createdAt: Date;
    updatedAt: Date;
}

export class AddressType {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    coordinates: string[];
}

export abstract class IQuery {
    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
