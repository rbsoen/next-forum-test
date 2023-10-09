"use client";

import { toast } from "react-hot-toast"
import styles from "./Post.module.css"
import { poppinsRegular } from "@/app/fonts"
import { newThread } from "@/app/thread/new/newThread";

export function PostForm({
children,
}: {
children: React.ReactNode
}) {
    async function onClient(data: FormData) {
        const resp = await newThread(data)
        toast.error("Not implemented yet")
    }
    return <form action={onClient} className={`${styles.post} ${poppinsRegular.className}`}>
        {children}
    </form>
}