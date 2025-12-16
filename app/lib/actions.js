"use server";


import bcrypt from "bcryptjs";
import connection from "./database";
import { redirect } from "next/navigation";

export async function registerUser (formData) {
    const username  = formData.get("username")
    const email     = formData.get("email")
    const password  = bcrypt.hashSync(formData.get("password"))

    await connection.execute(
        "insert into users (username, email, password) values (?, ?, ?)",
        [username, email, password]
    )
    
    redirect("/login")
}

export async function getUserByEmail(email) {
    const [users] = await connection.execute(
        "select * from users where email = ?",
        [email]
    )

    if (!users.length) return null

    return users[0]
}