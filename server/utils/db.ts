import { PrismaClient } from "@prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";

// const adapter = new PrismaPg({ url: process.env.DATABASE_URL || "" });
export const prisma = new PrismaClient();

// const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
// const adapter = new PrismaPg({ url: process.env.DATABASE_URL || "" });

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     adapter,
//     // log: ['query', 'info', 'warn', 'error'], // enable if needed
//   });

// if (process.env.NODE_ENV !== 'production') {
//   globalForPrisma.prisma = prisma;
// }