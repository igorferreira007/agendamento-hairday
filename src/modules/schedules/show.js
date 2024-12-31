import dayjs from "dayjs"

const periodMorning = document.getElementById("period-morning")
const periodAfternoon= document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function scheduleShow({ dailySchedules }) {
  try {
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    dailySchedules.forEach(schedule => {
      const item = document.createElement("li")

      item.setAttribute("data-id", schedule.id)
      
      item.innerHTML = `
        <strong>${dayjs(schedule.when).format("HH:mm")}</strong>
        <span>${schedule.name}</span>
        <img
          src="./src/assets/cancel.svg"
          alt="Cancelar"
          class="cancel-icon"
        />
      `

      const hour = dayjs(schedule.when).hour()

      if (hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })
  } catch (error) {
    console.log(error)
    alert("Não foi possível exibir os agendamentos")
  }
}