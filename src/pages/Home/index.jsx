import { useState } from 'react'
import Location from '@/components/Location'
import Daily from '@/components/Daily'
import Hourly from '@/components/Hourly'
import Astros from '@/components/Astros'

import { FORECAST_MOCK } from '@/mocks/data'
import styles from './home.module.css'

function Home() {
  const [forecast, setForecast] = useState(FORECAST_MOCK)

  const { forecast: hourlyForecast, ...dailyForecast } = forecast
  const firstForecastDay = hourlyForecast.forecastday[0]
  const chanceOfRain = firstForecastDay.day.daily_chance_of_rain
  const astros = firstForecastDay.astro

  return (
    <main className={styles.main}>
      <Location
        name={forecast.location.name}
        country={forecast.location.country}
        localTime={forecast.location.localtime_epoch}
      />
      <Daily forecast={dailyForecast} chanceOfRain={chanceOfRain} />
      <Hourly forecast={hourlyForecast} />
      <Astros astros={astros} />
      {/* aca se podria agregar lo mismo pero para los dos días siguientes resumidos
        en condicion, fecha, temperatura max y min

      */}
    </main>
  )
}

export default Home
