export default defineEventHandler(async (event) => {
    const id = getQuery(event).job_id?.toString();
    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: "job_id is required",
        });
    }
    const job = await prisma.job.findUniqueOrThrow({
        where: { id },
    });
    return {
        id: job.id,
        status: job.status.toLowerCase(),
        result: job.output,
    };
});