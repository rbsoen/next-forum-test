import { PrismaClient } from "@prisma/client"

const prismaClientGlobal = global as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma =
    prismaClientGlobal.prisma?? new PrismaClient(
        {log: ["query"]},
    )

if (process.env.NODE_ENV !== "production") {
    prismaClientGlobal.prisma = prisma
}