import { Post } from "./Post";
import styles from "./PostList.module.css"

export function PostList() {
    return <div className={styles.postList}>
        <Post title={""} date={new Date()} username={""} content={""} upvotes={0} downvotes={0} numComments={1}/>
        <Post title={""} date={new Date()} username={""} content={""} upvotes={0} downvotes={0} numComments={9}/>
        <Post title={""} date={new Date()} username={""} content={""} upvotes={0} downvotes={0} numComments={0}/>
        <Post title={""} date={new Date()} username={""} content={""} upvotes={0} downvotes={0} numComments={4}/>
        <Post title={""} date={new Date()} username={""} content={""} upvotes={0} downvotes={0} numComments={5}/>
        <Post title={""} date={new Date()} username={""} content={""} upvotes={0} downvotes={0} numComments={6}/>
    </div>
}