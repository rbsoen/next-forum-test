"use client"

import styles from "./AuthForm.module.css"
import { poppinsRegular } from "../app/fonts"
import { registerUser } from "@/app/register/regUser"
import { toast } from "react-hot-toast"
import { signIn } from "next-auth/react"

export default function AuthForm({type}: {type: "login"|"register"}) {
    async function onClient(data: FormData) {
        try {
            switch (type) {
                case "login":
                    // TODO: JSON responses not URLs
                    const resp = await signIn("credentials", {
                        email: data.get("email"),
                        password: data.get("pass"),
                        redirect: true,
                        callbackUrl: "/forum"
                    })
                    break;
                case "register":
                    await registerUser(data)
                    break;
                default:
                    break;
            }
        } catch (error) {
            toast.error(`${error}`)
        }
    }

    switch (type) {
        case "login":
            return <form action={onClient} className={`${styles.regForm} ${poppinsRegular.className}`}>
                <fieldset className={styles.mainInputs}>
                    <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" required placeholder="test@localhost"></input>
                    </div><div>
                    <label htmlFor="pass1">Password</label>
                    <input type="password" name="pass" id="pass" required></input>
                    </div>
                </fieldset>
                <fieldset className={styles.submitInputs}>
                    <input type="submit"/>
                </fieldset>
            </form>
        case "register":
            return <form action={onClient} className={`${styles.regForm} ${poppinsRegular.className}`}>
                <fieldset className={styles.mainInputs}>
                    <div>
                    <label htmlFor="dispname">Display name</label>
                    <input type="text" name="dispname" id="dispname" required placeholder="Mr. Test"></input>
                    </div><div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" required placeholder="test@localhost"></input>
                    </div><div>
                    <label htmlFor="pass1">Password</label>
                    <input type="password" name="pass1" id="pass1" required></input>
                    </div><div>
                    <label htmlFor="pass2">Repeat password</label>
                    <input type="password" name="pass2" id="pass2" required></input>
                    </div>
                </fieldset>
                <fieldset className={styles.submitInputs}>
                    <input type="submit"/>
                </fieldset>
            </form>
        default:
            break;
    }
}