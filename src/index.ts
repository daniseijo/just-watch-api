import axios from 'axios'

export const justWatch = async (query: string) => {
  const url = 'https://apis.justwatch.com/content/titles/es_ES/popular'
  const data = {
    content_types: ['show', 'movie'],
    page: 1,
    page_size: 7,
    query,
  }
  return await axios.post(url, data)
}
