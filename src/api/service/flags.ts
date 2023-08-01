import { client } from "../client"

interface CountryName {
  common: string
  official: string
}

export interface Country {
  name: CountryName
  capital: string[]
  population: number
  region: string
}

export const getFlags = async () => {  
    try {
      const { data } = await client.get<Country[]>(`/all?fields=population,region,capital,name`) 
      return data 
    } catch (error) {
      throw error 
    }
  }  
  

