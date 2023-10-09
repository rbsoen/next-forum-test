import { prisma } from "@/database";

export async function ForumCategorySelect() {
    const categories = await prisma.category.findMany(
        {where: {subcategoryOfId: null}}
    )
    return <div>
        <label htmlFor="catList">Category: </label>
        <select name="category" id="catList">
            {
                categories.map(async category => {
                    const subcategories = await prisma.category.findMany(
                        {where: {subcategoryOfId: category.id}}
                    )
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