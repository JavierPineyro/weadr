import styles from './location.module.css'
import { formatDate } from '@/utils'

function Location({ name, country, localTime }) {
  const date = formatDate(localTime)
  return (
    <>
      <h1 className={styles.title}>{name}</h1>
      <h3 className={styles.country}>{country}</h3>
      <h5 className={styles.date}>{date}</h5>
    </>
  )
}

export default Location
