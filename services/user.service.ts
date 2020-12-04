import { db } from '../utils/dataBase.ts';
import { ObjectId } from "https://deno.land/x/mongo@v0.20.0/bson/mod.ts";
import type { User, NewUser } from '../models/user.model.ts';
import * as bcrypt from "https://deno.land/x/bcrypt@v0.2.4/mod.ts";

const database = db.getDatabase;
const users = database.collection<User>('users');

async function hashPassword(password: string) {
    const salt = await bcrypt.genSalt(8);
    return bcrypt.hash(password, salt);
}

export const checkPassword = async (admin: User, password: string) => {
    if (!admin || !(await bcrypt.compare(password, admin.password)))
        return false;
    return true;
}

export const createUser = async (newUser: NewUser) => {
    const fullUser = newUser as User;
    fullUser.password = await hashPassword(newUser.password);
    const insertedUser = await users.insertOne(fullUser);
    return insertedUser;
}

export const findById = async (userId: string) => {
    let id;
    try {
        id = new ObjectId(userId);
    } catch (error) {
        throw new Error('Bad id');
    }
    const user = await users.findOne({_id: id});

    if (user)
        return user;

    throw new Error('Not found');
}

export const findByName = async (name: string) => {
    const user = await users.findOne({name});

    if (user)
        return user;

    throw new Error('Not found');
}

export const findByMail = async (mail: string) => {
    const user = await users.findOne({mail});

    if (user)
        return user;

    throw new Error('Not found');
}

export const deleteById = async (userId: string) => {
    let id;
    try {
        id = new ObjectId(userId);
    } catch (error) {
        throw new Error('Bad id');
    }
    const deleteCount = await users.deleteOne({_id: id});

    if (deleteCount == 0)
        throw new Error('Not found');
}

/* Implementation needed ? */
/* export const getAll = async (limit: number | undefined, offset: number | undefined) => {
    const foundUsers: User[] = (await users.find({}, { limit, skip: offset }))
        .map(user => {
            return {_id: user._id, mail: user.mail, name: user.name};
        });
    return foundUsers;
} */
