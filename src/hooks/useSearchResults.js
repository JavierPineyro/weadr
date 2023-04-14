import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { searcher } from '@/utils'

export function useSearchResults({ query }) {
  const [results, setResults] = useState([])

  const { debouncedValue } = useDebounce(query, 400)

  useEffect(() => {
    if (debouncedValue) {
      searcher(debouncedValue).then(setResults)
    } else {
      setResults([])
    }
  }, [debouncedValue])

  return { results }
}
