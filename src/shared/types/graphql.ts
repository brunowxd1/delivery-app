
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}

export class LoginUserInput {
    email: string;
    password: string;
}

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
    password: string;
}

export class UpdateUserInput {
    id: string;
    email?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<CreateUserAddressInput>;
    phoneNumber?: Nullable<string>;
}

export class UpdatePasswordInput {
    id: string;
    oldPassword: string;
    newPassword: string;
}

export class AccessToken {
    access_token: string;
}

export abstract class IQuery {
    abstract login(loginInput: LoginUserInput): AccessToken | Promise<AccessToken>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    email: string;
    name: string;
    address: AddressType;
    phoneNumber: string;
    createdAt: Date;
    updatedAt: Date;
    role: Role;
}

export class AddressType {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    coordinates: string[];
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract updateUserPassword(updateUserPasswordInput: UpdatePasswordInput): User | Promise<User>;

    abstract removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
