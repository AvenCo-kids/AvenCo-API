export interface User {
    _id: string;
    mail: string;
    password: string;
}

export interface NewUser {
    mail: string;
    username: string;
    password: string;
}
