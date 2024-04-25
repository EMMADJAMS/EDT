import {PrismaClient} from '@prisma/client'

const globalforPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma= 
globalforPrisma.prisma ??
new PrismaClient({
    log:
        process.env.NODE_ENV ==="development" 
            ? ["query","error","warn"] : ["error"]
})

if(process.env.NODE_ENV !== "production") globalforPrisma.prisma=prisma