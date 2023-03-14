import HourItem from './HourItem'
import styles from './hourly.module.css'

function Hourly({ forecast }) {
  const { forecastday } = forecast
  const data = forecastday[0]
  const { hour: hours } = data

  return (
    <section className={styles.content}>
      {hours.map((hour, index) => (
        <HourItem
          key={index}
          isDay={hour.is_day}
          time={hour.time}
          temp={hour.temp_c}
          condition={hour.condition}
        />
      ))}
    </section>
  )
}

export default Hourly
