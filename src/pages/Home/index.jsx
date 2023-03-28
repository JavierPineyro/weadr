import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import useSWR from 'swr'
import { fetcher, FORECAST_URL } from '@/utils'

import Location from '@/components/Location'
import Daily from '@/components/Daily'
import Hourly from '@/components/Hourly'
import Astros from '@/components/Astros'
import Skeleton from '@/components/Skeleton'

import styles from './home.module.css'

function Home() {
  const [geolocation, setGeolocation] = useState('capiovi')
  const { data, error } = useSWR(`${FORECAST_URL}${geolocation}&days=1&lang=es`, fetcher)

  useEffect(() => {
    function getCurrentLocation() {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        setGeolocation(`${latitude},${longitude}`)
      })
    }

    getCurrentLocation()
  }, [])

  if (error) return <Navigate to="/404" />
  if (!data) return <Skeleton />

  const { forecast: hourlyForecast, ...dailyForecast } = data
  const firstForecastDay = hourlyForecast.forecastday[0]
  const chanceOfRain = firstForecastDay.day.daily_chance_of_rain
  const astros = firstForecastDay.astro

  return (
    <main className={styles.main}>
      <Location
        name={data.location.name}
        country={data.location.country}
        localTime={data.location.localtime_epoch}
      />
      <Daily forecast={dailyForecast} chanceOfRain={chanceOfRain} />
      <Hourly forecast={hourlyForecast} />
      <Astros astros={astros} />
    </main>
  )
}

export default Home
