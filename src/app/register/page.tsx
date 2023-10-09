"use server";
import AuthForm from "@/components/AuthForm";
import Layout from "@/components/Layout";
import { poppinsBold } from "../fonts";

export default async function Page() {
    return <Layout>
        <h2 className={`${poppinsBold.className} staticH2`}>Register</h2>
        <AuthForm type="register"/>
    </Layout>
}