import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.category.create({
        data: {
            name: "General",
            subcategories: {
                create: [
                    {name: "Local news"},
                    {name: "International news"},
                    {name: "Site discussion"},
                ],
            }
        }
    })
    await prisma.category.create({
        data: {
            name: "Off topic",
            subcategories: {
                create: [
                    {name: "Spam center"},
                ],
            }
        }
    })
}

main()
.then(async () => {
await prisma.$disconnect()
})
.catch(async (e) => {
console.error(e)
await prisma.$disconnect()
process.exit(1)
})