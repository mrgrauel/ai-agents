import { prisma } from "../db";

export const jobsService = {
     getJobById: async (id: string) => {
        try {
            const job = await prisma.job.findUniqueOrThrow({
                where: { id },
            });
            return {
                id: job.id,
                status: job.status.toLowerCase(),
                result: job.output,
            };
        } catch (error) {
            console.error("error getting job", error);
            throw createError({
                statusCode: 500,
                statusMessage: "failed to get job",
            });
        }
    }
};

