import { prisma } from "@/database";
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

export function ForumCategorySelect() {
    const categories = use(getCategories())
    return <div>
        <label htmlFor="catList">Category: </label>
        <select name="category" id="catList">
            {
                categories.map(category => {
                    const subcategories = use(getSubcategories(category.id))
                    return <optgroup label={category.name}>
                        {
                            subcategories.map(subcategory => 
                                <option value={subcategory.id}>
                                    {subcategory.name}
                                </option>
                            )
                        }
                    </optgroup>
                })
            }
        </select>
    </div>
}