export const formatDate = (t) => {
  const rawDate = new Date(t * 1000) // con el epoc time transformo a date
  const options = { dateStyle: 'full' } // opciones para mostrar la fecha
  return new Intl.DateTimeFormat('es-AR', options).format(rawDate) // creo la fecha
}
