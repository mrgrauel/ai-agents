import { defineEventHandler } from "h3";
import { v4 as uuidv4 } from 'uuid';

export default defineEventHandler(async (event) => {
  const job_id = uuidv4();
  return {
    status: "success",
    job_id: job_id,
  };
});