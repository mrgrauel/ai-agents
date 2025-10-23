export default defineEventHandler(async (_) => {
  return {
    status: "available",
    type: "masumi-agent",
    message: "Workout Agent is available",
  };
});