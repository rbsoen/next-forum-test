import styles from "./Post.module.css"
import { poppinsRegular, poppinsBold } from "@/app/fonts"
import Link from "next/link"
import strftime from "strftime"
import Markdown from 'react-markdown'

export type PostItem = {
    title: string
    date: Date
    username: string
    content: string
    upvotes: number
    downvotes: number
    numComments: number
}

export function Post({
    title = "Test",
    date = new Date(),
    username = "anonymous",
    content = "*No content provided*",
    upvotes = 0,
    downvotes = 0,
    numComments = 0
}: PostItem){
    return <article className={`${styles.post} ${poppinsRegular.className}`}>
        <header>
            <img src="https://placekitten.com/64/64" alt="Profile"/>
            <div className={styles.headerTitle}>
                <h2 className={poppinsBold.className}>{title}</h2>
                <span className={styles.postLink}>
                    <Link href="#userName">{username}</Link>&mdash;
                    <Link href="#dateTime">
                        <time dateTime="2020-08-01">{strftime("%B %d %Y %H:%M:%S", date)}</time>
                    </Link>
                </span>
            </div>
            <dl className={styles.headerVotes}>
                <Link href="#goUpvote"><div className={styles.headerUpvote}>
                    <dt>Upvotes</dt>
                    <dd>{upvotes}</dd>
                </div></Link>
                <Link href="#goDownvote"><div className={styles.headerDownvote}>
                    <dt>Downvotes</dt>
                    <dd>{downvotes}</dd>
                </div></Link>
            </dl>
        </header>
        <div className={styles.postMain}>
            <Markdown>
                {content}
            </Markdown>
        </div>
        <footer>
            <ul className={styles.postActions}>
                <li><Link href="#comments">{numComments} Comments</Link></li>
                <li><Link href="#share">Share</Link></li>
                <li><Link href="#report">Report</Link></li>
            </ul>
        </footer>
    </article>
}