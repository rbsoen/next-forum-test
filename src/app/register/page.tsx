"use server";
import AuthForm from "@/components/AuthForm";
import { poppinsBold } from "../fonts";

export default async function Page() {
    return <>
        <h2 className={`${poppinsBold.className} staticH2`}>Register</h2>
        <AuthForm type="register"/>
    </>
}