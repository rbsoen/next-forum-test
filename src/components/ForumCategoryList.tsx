import { prisma } from "@/database";
import Link from "next/link";
import styles from "./ForumCategoryList.module.css"
import { poppinsRegular } from "@/app/fonts";
import { use } from "react";

async function getCategories() {
    return await prisma.category.findMany(
        {where: {subcategoryOfId: null}}
    )
}

async function getSubcategories(subOfId: number) {
    return await prisma.category.findMany(
        {where: {subcategoryOfId: subOfId}}
    )
}

export function ForumCategoryList() {
    const categories = use(getCategories())
    return <ul className={`${styles.catList} ${poppinsRegular.className}`}>
        {
            categories.map(category => {
                const subcategories = use(getSubcategories(category.id))
                return <li>
                    <Link href={`#${category.id}`}>
                        {category.name}
                    </Link>
                    {
                        subcategories.length > 0
                        ? <ul>{
                            subcategories.map(subcategory => 
                            <li>
                                <Link href={`#${subcategory.id}`}>
                                {subcategory.name}
                                </Link>
                            </li>
                            )
                        }</ul>
                        : <></>
                    }
                </li>
            })
        }
    </ul>
}