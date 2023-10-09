"use server";
import { PostList } from "@/components/PostList"
import Layout from "@/components/Layout";

export default async function Page() {
    return <Layout>
        <PostList/>
    </Layout>
}