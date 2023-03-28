export const FORECAST_URL =
  'https://weatherapi-com.p.rapidapi.com/forecast.json?q='

export const SEARCH_URL =
  'https://weatherapi-com.p.rapidapi.com/search.json?q='

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': import.meta.env.VITE_API_HOST,
    'X-RapidAPI-Key': import.meta.env.API_KEY
  }
}

export const formatDate = (t) => {
  const rawDate = new Date(t * 1000) // con el epoc time transformo a date
  const options = { dateStyle: 'full' } // opciones para mostrar la fecha
  return new Intl.DateTimeFormat('es-AR', options).format(rawDate) // creo la fecha
}

export const fetcher = async (url) => {
  if (!url) return []
  const res = await fetch(url, API_OPTIONS)

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    throw error
  }
  return res.json()
}

export const searcher = async (query) => {
  if (!query) return []
  const res = await fetch(`${SEARCH_URL}${query}`, API_OPTIONS)
  return res.json()
}
