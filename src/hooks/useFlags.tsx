import { useEffect, useState } from "react"
import { Country, getCountries } from "../api/service/flags"

export const useFlags = () => {
  const [allFlags, setAllFlags] = useState<Country[]>([]) //cria o estado. iniciando como vazio.
  
  const handleLoadFlags = async () => { //cria uma função para lidar com o carrregamento das flags. carregar o serviço e manipilar
    const data = await getCountries() 
    setAllFlags(data) //Joga para o allFlags.
  }
  
  useEffect(() => {  //Executae em todo o render do componente. 
    handleLoadFlags()
  }, []) //exe no primeiro render, pois o arr está vazio.

  return { allFlags }
}

 