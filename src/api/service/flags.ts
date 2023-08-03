import { client } from "../client"

interface FlagsTypes {
  alt: string
  svg: string
  png: string
}

interface CountryName {
  common: string
  official: string
}

export interface Country {
  name: CountryName
  capital: string[]
  population: number
  region: string
  flags: FlagsTypes
}

export const getFlags = async () => {  
    try {
      const { data } = await client.get<Country[]>(`/all?fields=population,region,capital,name,flags`) 
      return data 
    } catch (error) {
      throw error 
    }
  }  
  
