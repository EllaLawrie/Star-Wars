import axios from 'axios'
import { useQuery } from 'react-query'

export const useMultiApiCalls = (urls, querykey) => {
  const fetchData = async (url) => {
    const { data } = await axios.get(url)
    return data
  }
  const { data, isFetching, error } = useQuery(
    querykey,
    async () => {
      const results = await Promise.all(urls.map((url) => fetchData(url)))
      return results
    },
    {
      enabled: urls?.length > 0,
    }
  )

  return {
    data,
    isFetching,
    error,
  }
}
