import styles from './skeleton.module.css'

function Skeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title} />
        <div className={styles.subtitle} />
        <div className={styles.time} />
      </div>
      <div className={styles.cardsTime}></div>
      <div className={styles.cardsTime}></div>
    </div>
  )
}

export default Skeleton
