import { JobStatus } from "@prisma/client";

export default defineEventHandler(async (event) => {
	const data = await readBody(event);
	if (!data.input_data) {
		throw createError({
			statusCode: 400,
			statusMessage: "input_data is required",
		});
	}
	try {
		const job = await prisma.job.create({
			data: {
				status: JobStatus.RUNNING,
				input: data.input_data,
			},
		});
		return {
			id: job.id,
			status: "success",
		};
	} catch (error) {
		console.error("error starting job", error);
		throw createError({
			statusCode: 500,
			statusMessage: "failed to start job",
		});
	}
});
