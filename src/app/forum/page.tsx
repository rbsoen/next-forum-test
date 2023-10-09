import { PostList } from "@/components/PostList"
import Layout from "@/components/Layout";
import Link from "next/link";
import { ForumCategoryList } from "@/components/ForumCategoryList";
import styles from "./page.module.css"

export default function Page() {
    return <Layout>
        <Link href="/thread/new">Create a new thread</Link>
        <div className={styles.forumPage}>
            <ForumCategoryList/>
            <PostList/>
        </div>
    </Layout>
}