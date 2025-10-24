import { sendRedirect } from 'h3'

export default defineEventHandler((event) => {
    const id = getQuery(event).job_id?.toString();
    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: "job_id is required",
        });
    }
  return sendRedirect(event, `/api/agents/workout/jobs/${id}`, 307)
})