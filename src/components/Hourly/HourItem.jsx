import { SunIcon, MoonIcon } from '@/components/Icons'
import styles from './hourly.module.css'

function HourItem({ isDay, condition, temp, time }) {
  const tempRounded = Math.floor(temp)
  return (
    <div className={styles.hourItem}>
      <time className={styles.hourTime}>{time.split(' ')[1]}</time>
      <p className={styles.hourIcon}>{isDay ? <SunIcon /> : <MoonIcon />}</p>
      <p className={styles.hourTemp}>{tempRounded}°C</p>
      <p className={styles.hourText}>{condition.text}</p>
    </div>
  )
}

export default HourItem
