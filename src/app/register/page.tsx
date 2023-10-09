"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/database"
import AuthForm from "@/components/AuthForm";

export async function registerUser(data: FormData) {
    const dispname = data.get("dispname")
    const email = data.get("email")
    const password = data.get("pass1")
    const password2 = data.get("pass2")
    
    if (typeof(dispname) !== "string") throw new Error("no display name!");
    if (typeof(email) !== "string") throw new Error("no email!");
    if (typeof(password) !== "string") throw new Error("no password!");
    if (typeof(password2) !== "string") throw new Error("repeat your password!")
    if (password !== password2) throw new Error("passwords not identical!")
    const exists = await prisma.User.findUnique({where: {email}});
    if (exists) {
        throw new Error("email already used");
    }
    await prisma.User.create({
        data: {
           displayName: dispname,
           email: email,
           password: password 
        }
    })

    redirect("/login")
}

export default async function Page() {
    return <AuthForm type="register"/>
}