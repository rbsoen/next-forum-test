"use server";

import Layout from "@/components/Layout";
import { Post } from "@/components/Post";
import { poppinsBold } from "@/app/fonts";

export default async function Page() {
    return <Layout>
        <h2 class={`staticH2 ${poppinsBold.className}`}>
            Start a conversation&hellip;
        </h2>
        <Post editable={true} post={null}/>
    </Layout>
}