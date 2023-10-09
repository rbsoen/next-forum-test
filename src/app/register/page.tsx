import styles from "./page.module.css"
import { poppinsRegular } from "../fonts"
import { prisma } from "@/database";
import { redirect } from "next/navigation";

async function registerUser(data: FormData) {
    "use server";
    
    const dispname = data.get("dispname")
    const email = data.get("email")
    const password = data.get("pass1")
    const password2 = data.get("pass2")
    
    /* want to make a flash message */
    if (typeof(dispname) !== "string") throw new Error("no display name!");
    if (typeof(email) !== "string") throw new Error("no email!");
    if (typeof(password) !== "string") throw new Error("no password!");
    if (typeof(password2) !== "string") throw new Error("repeat your password!")
    if (password !== password2) throw new Error("passwords not identical!")

    await prisma.User.create({
        data: {
           displayName: dispname,
           email: email,
           password: password 
        }
    })

    redirect("/forum")
}

export default function Page() {
    return <form action={registerUser} className={`${styles.regForm} ${poppinsRegular.className}`}>
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
}