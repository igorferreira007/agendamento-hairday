import { scheduleFetchBtDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { scheduleShow } from "./show.js"

const selectedDate = document.getElementById("date")

export async function schedulesDays() {
  const date = selectedDate.value

  const dailySchedules = await scheduleFetchBtDay({ date })

  scheduleShow({ dailySchedules })
  
  hoursLoad({ date, dailySchedules })
}