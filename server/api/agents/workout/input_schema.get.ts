export default defineEventHandler(async (event) => {
  return {
    input_data: [
        {
            type: "radio",
            name: "Workout Type",
            data: {
              values: ["Weightlifting", "CrossFit", "Running", "Cycling", "Swimming", "Rowing"],
              default: "Weightlifting"
            }
        }
    ]
    }
});