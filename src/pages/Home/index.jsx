import React, { useState } from 'react'
import Daily from '@/components/Daily'
import { FORECAST_MOCK } from '@/mocks/data'
import { formatDate } from '@/utils'

import styles from './home.module.css'

function Home() {
  const [forecast, setForecast] = useState(FORECAST_MOCK)
  const { forecast: hourlyForecast, ...dailyForecast } = forecast // quito lo que no uso

  return (
    <main>
      <h1 className={styles.title}>{forecast.location.name}</h1>
      <h3 className={styles.country}>{forecast.location.country}</h3>
      <h5 className={styles.date}>{formatDate(forecast.location.localtime_epoch)}</h5>
      <Daily forecast={dailyForecast} />
      {/* ACA VIENE LA BOX CON LA HORA,TEMPERATURA Y CONDICION CHIQUITO */}
      {/* aca viene la box con la puesta del sol y salida del sol etiqueta time */}
      {/* aca se podria agregar lo mismo pero para los dos días siguientes resumidos
        en condicion, fecha, temperatura max y min

      */}
    </main>
  )
}

export default Home
