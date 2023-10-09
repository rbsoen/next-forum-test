import styles from "./Post.module.css"
import { poppinsRegular, poppinsBold } from "@/app/fonts"
import Link from "next/link"
import strftime from "strftime"
import Markdown from 'react-markdown'
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { PostForm } from "./PostForm"
import { ForumCategorySelect } from "./ForumCategorySelect"

export type PostItem = {
    title: string
    date: Date
    username: string
    content: string
    upvotes: number
    downvotes: number
    numComments: number
}

export async function Post({
    post,
    editable = false
}: {post: PostItem|null, editable: boolean}){
    const session = await getServerSession(authOptions)
    console.log(session)

    const contents = <>
        <header>
            <img src="https://placekitten.com/64/64" alt="Profile"/>
            <div className={styles.headerTitle}>
                {
                    editable
                    ? (
                        <input required type="text" name="title" placeholder="Title here" className={`${poppinsBold.className} block text-2xl border-sky-300 border-2 w-[100%]`}/>
                    )
                    : (
                        <h2 className={poppinsBold.className}>
                            {post?.title}
                        </h2>
                    )
                }
                <span className={styles.postLink}>
                    <Link href="#userName">
                        {
                            editable
                            ? (
                                session?.user
                                ? session.user.displayName
                                : "unknown"
                            )
                            : post?.username
                        }
                    </Link>
                    {editable ? <></> : (
                        <>
                            &mdash;
                            <Link href="#dateTime">
                                <time dateTime="2020-08-01">{strftime("%B %d %Y %H:%M:%S", post?.date?? new Date())}</time>
                            </Link>
                        </>
                    )}
                </span>
            </div>
            {
                editable
                ? <></>
                : (
                    <dl className={styles.headerVotes}>
                        <Link href="#goUpvote"><div className={styles.headerUpvote}>
                            <dt>Upvotes</dt>
                            <dd>{post?.upvotes}</dd>
                        </div></Link>
                        <Link href="#goDownvote"><div className={styles.headerDownvote}>
                            <dt>Downvotes</dt>
                            <dd>{post?.downvotes}</dd>
                        </div></Link>
                    </dl>
                )
            }
        </header>
        <div className={styles.postMain}>
            {
                editable
                ? <textarea required
                    name="content"
                    className="border-2 w-[100%] min-h-[10em]"
                    placeholder="Content here"
                ></textarea>
                : <Markdown>
                    {post?.content}
                </Markdown>
            }
        </div>
        <footer>
        {
            editable
            ? (
                <div className="flex flex-row items-center justify-end gap-4">
                    <ForumCategorySelect/>
                    <input type="submit" className="bg-slate-300 hover:bg-slate-400 transition-colors rounded-sm px-4 py-2"/>
                </div>
            )
            : (
                <ul className={styles.postActions}>
                    <li><Link href="#comments">{post?.numComments} Comments</Link></li>
                    <li><Link href="#share">Share</Link></li>
                    <li><Link href="#report">Report</Link></li>
                </ul>
            )
        }
        </footer>
    </>

    return <>{
        !editable
        ? (
            <article className={`${styles.post} ${poppinsRegular.className}`}>
                {contents}
            </article>
        )
        : (
            session
            ?   <PostForm>
                    {contents}
                </PostForm>
            :   <p>Cannot start a thread, please log in.</p>
        )
    }</>
}