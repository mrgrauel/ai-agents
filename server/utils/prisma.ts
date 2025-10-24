import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

// Create a singleton instance of PrismaClient
const prismaClientSingleton = () => {
	const adapter = new PrismaPg({
		connectionString: useRuntimeConfig().databaseUrl,
	});
	return new PrismaClient({
		adapter,
	});
};

declare global {
	var prismaGlobal: ReturnType<typeof prismaClientSingleton> | undefined;
}

/**
 * Prisma client instance.
 *
 * This should be used all over the app instead of re-creating new instances.
 */
const prisma = global.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (useRuntimeConfig().environment !== "production") global.prismaGlobal = prisma;
