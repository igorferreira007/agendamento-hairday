import { schedulesDays } from "../schedules/load.js"

const selectedDate = document.getElementById("date")

selectedDate.addEventListener("change", () => schedulesDays())