import { defineEventHandler } from "h3";
import { prisma } from '../../utils/prisma';
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
      status: "success",
      job_id: job.id,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "failed to start job",
    });
  } 
});