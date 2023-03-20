import ValueLabel from '@/components/ValueLabel'
import { MoonriseIcon, MoonsetIcon, SunriseIcon, SunsetIcon } from '@/components/Icons'
import styles from './astros.module.css'

function Astros({ astros: { sunrise, sunset, moonrise, moonset } }) {
  const ITEMS = [
    {
      value: sunrise,
      label: 'Sale el Sol',
      icon: <SunriseIcon />
    },
    {
      value: sunset,
      label: 'Se pone el Sol',
      icon: <SunsetIcon />
    },
    {
      value: moonrise,
      label: 'Sale la Luna',
      icon: <MoonriseIcon />
    },
    {
      value: moonset,
      label: 'Se pone la Luna',
      icon: <MoonsetIcon />
    }
  ]

  return (
    <section className={styles.container}>
      {
        ITEMS.map((item, index) => (
          <article key={index} className={styles.article} title={item.label}>
            <header>
              {item.icon}
            </header>
            <ValueLabel value={item.value} />
            <footer className={styles.label}>
              {item.label}
            </footer>
          </article>
        ))
      }
    </section>
  )
}

export default Astros
