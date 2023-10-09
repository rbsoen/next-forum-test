import { Post, PostItem } from "./Post";
import styles from "./PostList.module.css"

const samplePost: PostItem = {
    title: "Untitled",
    date: new Date(),
    username: "unknown",
    content: "*No content!*",
    upvotes: 100,
    downvotes: 25,
    numComments: 12
}

export function PostList() {
    return <div className={styles.postList}>
        <Post editable={false} post={samplePost}/>
        <Post editable={false} post={samplePost}/>
        <Post editable={false} post={samplePost}/>
        <Post editable={false} post={samplePost}/>
        <Post editable={false} post={samplePost}/>
        <Post editable={false} post={samplePost}/>
    </div>
}