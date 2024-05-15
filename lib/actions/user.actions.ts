"use server";

import { connectToDatabase } from "../database/dbConfig";
import { CreateUserParams } from "../types";
import User from "../database/models/user.model";

// CREATE
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
