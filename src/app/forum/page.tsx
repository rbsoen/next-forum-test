"use server";
import { PostList } from "@/components/PostList"
import Layout from "@/components/Layout";
import Link from "next/link";

export default async function Page() {
    return <Layout>
        <Link href="/thread/new">Create a new thread</Link>
        <PostList/>
    </Layout>
}