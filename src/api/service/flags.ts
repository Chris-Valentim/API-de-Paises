import { client } from "../client"

interface FlagsTypes {
  /**
   * Texto alternativo para a imagem
   */
  alt: string
  
  /**
   * Formato de Scalable Vector Graphics
   */
  svg: string

  /**
   * Imagem com transparencia
   */
  png: string
}

interface LanguagesProps<T> {
  x: T | unknown
}

interface CurrenciesProps {
  usd: {
    name: string
    symbol: string
  }
}

interface NativeNameProps {
  official: string
}

interface CountryName {
  common: string
  official: string
  nativeName: NativeNameProps
}

export interface Country {
  name: CountryName
  flags: FlagsTypes
  currencies: CurrenciesProps
  capital: string[]
  altSpellings: string[]
  subRegion: string
  region: string
  population: number
  language: LanguagesProps<string>
}

export const getCountries = async () => {
  try {
    const { data } = await client.get<Country[]>(`/v3.1/all?fields=population,region,capital,name,flags`) 
    return data
  } catch (error) {
    throw error
  }
}

// Get -> Pegar, Obter, Recuperar, Buscar
// País -> singular (é um só)
export const getCountry = async (name: string) => {
  // Tentar 
  try {
    // Atribuição por desestruturação -> destructuring assignment
    const { data } = await client.get<Country[]>(`/v3.1/name/${name}`)
    return data[0]
  } catch (error) {
    throw error
  }
}
