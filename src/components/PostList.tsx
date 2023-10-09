import { Post } from "./Post";
import styles from "./PostList.module.css"

export function PostList() {
    return <div className={styles.postList}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
}