export default defineEventHandler(async (event) => {
	const id = getQuery(event).job_id?.toString();
	if (!id) {
		throw createError({
			statusCode: 400,
			statusMessage: "job_id is required",
		});
	}
	return await jobsService.getJobById(id);
});
