import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

// Create a singleton instance of PrismaClient
const prismaClientSingleton = () => {
  const adapter = new PrismaPg({ connectionString: useRuntimeConfig().databaseUrl });
  return new PrismaClient({
      adapter,
    })
  };
  
  // Make it available globally
  declare const globalThis: {
    prisma: ReturnType<typeof prismaClientSingleton>;
  } & typeof global;
  
  /**
   * Prisma client instance.
   *
   * This should be used all over the app instead of re-creating new instances.
   */
  const prisma = globalThis.prisma ?? prismaClientSingleton();
  
  export default prisma;
  
  if (useRuntimeConfig().environment !== "production") globalThis.prisma = prisma;