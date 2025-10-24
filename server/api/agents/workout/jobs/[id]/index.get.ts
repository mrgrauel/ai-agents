export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: "id is required",
        });
    }
    try {
        const job = await prisma.job.findUniqueOrThrow({
            where: { id },
        });
        console.log("job", job);
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
});