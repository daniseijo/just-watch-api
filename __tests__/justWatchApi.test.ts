import { justWatch } from '../src'

describe('justWatchApi', () => {
  it('should return Aladdin query results', async () => {
    const resp = await justWatch('aladdin')
    const aladdinMovie = resp.data.items[0]
    expect(aladdinMovie.full_path).toBe('/es/pelicula/aladdin')
    expect(aladdinMovie.id).toBe(123824)
  })
})
