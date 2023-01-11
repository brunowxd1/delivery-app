
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCustomerAddressInput {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    coordinates: string[];
}

export class UpdateCustomerAddressInput {
    street?: Nullable<string>;
    city?: Nullable<string>;
    state?: Nullable<string>;
    country?: Nullable<string>;
    zipCode?: Nullable<string>;
    coordinates?: Nullable<string[]>;
}

export class CreateCustomerInput {
    email: string;
    name: string;
    address: CreateCustomerAddressInput;
    phoneNumber: string;
}

export class UpdateCustomerInput {
    id: string;
    email?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<CreateCustomerAddressInput>;
    phoneNumber?: Nullable<string>;
}

export class Customer {
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
    abstract customers(): Nullable<Customer>[] | Promise<Nullable<Customer>[]>;

    abstract customer(id: string): Nullable<Customer> | Promise<Nullable<Customer>>;
}

export abstract class IMutation {
    abstract createCustomer(createCustomerInput: CreateCustomerInput): Customer | Promise<Customer>;

    abstract updateCustomer(updateCustomerInput: UpdateCustomerInput): Customer | Promise<Customer>;

    abstract removeCustomer(id: string): Nullable<Customer> | Promise<Nullable<Customer>>;
}

type Nullable<T> = T | null;
