import styles from './value.module.css'

function ValueLabel({ value, label = '' }) {
  return (
    <p className={styles.value}>
      {value} {label}
    </p>
  )
}

export default ValueLabel
