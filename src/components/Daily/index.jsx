import { HumidityIcon, WindIcon } from '@/components/Icons'
import styles from './daily.module.css'

function Daily({ forecast, chanceOfRain }) {
  const cards = [
    {
      classnames: {
        cssWrap: styles.celsius,
        cssIcon: styles.tempIcon,
        cssData: styles.celsiusValue,
        cssLabel: styles.celsiusLabel
      },
      icon: <img src={forecast.current.condition.icon} alt={`Clima de ${forecast.location.name}`} />,
      value: forecast.current.temp_c,
      type: '°C',
      label: forecast.current.condition.text
    },
    {
      classnames: {
        cssWrap: styles.humidity,
        cssIcon: styles.humidityIcon,
        cssData: styles.humidityValue,
        cssLabel: styles.humidityLabel
      },
      icon: <HumidityIcon />,
      value: forecast.current.humidity,
      type: '%',
      label: 'Humedad'
    },
    {
      classnames: {
        cssWrap: styles.wind,
        cssIcon: styles.windIcon,
        cssData: styles.windValue,
        cssLabel: styles.windLabel
      },
      icon: <WindIcon />,
      value: forecast.current.wind_kph,
      type: 'km/h',
      label: 'Viento'
    },
    {
      classnames: {
        cssWrap: styles.wind,
        cssIcon: styles.windIcon,
        cssData: styles.windValue,
        cssLabel: styles.windLabel
      },
      icon: <WindIcon />,
      value: chanceOfRain,
      type: '%',
      label: 'Probabilidad de lluvias'
    }
  ]

  return (
    <section className={styles.container}>
      {
        cards.map((item, index) => {
          return (
            <article key={index} className={item.classnames.cssWrap}>
              <div className={item.classnames.cssIcon}>
                {item.icon}
              </div>
              <div>
                <div className={item.classnames.cssData}>{item.value}<span>{item.type}</span></div>
                <div className={item.classnames.cssLabel}>{item.label}</div>
              </div>
            </article>
          )
        })
      }
    </section>
  )
}
export default Daily

{ /* <article className={styles.celsius}>
<div className={styles.tempIcon}>
  <img src={forecast.current.condition.icon} alt={`Clima de ${forecast.location.name}`} />
</div>\docs\rules\no-lone-blocks
<div>
  <div className={styles.celsiusValue}>{forecast.current.temp_c}<span>°C</span></div>
  <div className={styles.celsiusLabel}>{forecast.current.condition.text}</div>
</div>
</article>

<article className={styles.humidity}>
<div className={styles.humidityIcon}><HumidityIcon /></div>
<div>
  <div className={styles.humidityValue}>{forecast.current.humidity}<span>%</span></div>
  <div className={styles.humidityLabel}>Humedad</div>
</div>
</article>

<article className={styles.wind}>
<div className={styles.windIcon}><WindIcon /></div>
<div>
  <div className={styles.windValue}>{forecast.current.wind_kph}<span>km/h</span></div>
  <div className={styles.windLabel}>Viento</div>
</div>
</article>
<article className={styles.wind}>
<div className={styles.windIcon}><WindIcon /></div>
<div>
  <div className={styles.windValue}>{forecast.current.wind_kph}<span>km/h</span></div>
  <div className={styles.windLabel}>Viento</div>
</div>
</article> */ }
