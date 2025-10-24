export default defineEventHandler(async () => {
	return {
		status: "available",
		type: "masumi-agent",
		message: "Workout Agent is available",
	};
});
