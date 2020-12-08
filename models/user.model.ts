/** Represent an user in the db */
export interface User {
    _id: string;
    mail: string;
    name: string;
    password: string;
}

/** Represent an user without the lements from the db */
export interface NewUser {
    mail: string;
    name: string;
    password: string;
}
