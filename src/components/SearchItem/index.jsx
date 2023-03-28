import { DirectionIcon } from '@/components/Icons'
import { Link } from 'react-router-dom'
import styles from './searchItem.module.css'

function SearchItem({ city, region, country }) {
  return (
    <Link to={`/search/${city}`} className={styles.article}>
      <header className={styles.header}>
        <DirectionIcon width={16} height={16} />
        <p>{city}</p>
      </header>
      <footer className={styles.footer}>
        {region} - {country}
      </footer>
    </Link>
  )
}

export default SearchItem
