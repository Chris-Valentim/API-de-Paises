import { useState, useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useParams, useNavigate } from 'react-router-dom'

import { getCountry, Country } from '../../api/service/flags';

const CountryDetails = () => {
  const [ country, setCountry ] = useState<Country>() 
  const { countryName } = useParams()
  const navigate = useNavigate()
  
  const handleLoadCountry = async (countryName: string) => {
    const data = await getCountry(countryName) //solicitou e aguardou o retorno do dado.
    setCountry(data) //Já recebeu o dado e atribiu ao estado.
  } //função VOID
  // console.log(country)
  
  // Executa em todo o render do componente.
  useEffect(() => { 
    if (countryName) {  
      handleLoadCountry(countryName)
    }
  }, [countryName])

  console.log(country)
    

  return (
    <div className="flex flex-col justify-center h-screen">
      <button className="mb-10 w-28 py-1 px-5 ml-[66px] flex justify-center items-center gap-2 shadow-[0px_1px_5px_3px_rgba(0,0,0,0.1)] text-zinc-500" onClick={() => {navigate('/')}}>
        <BsArrowLeft />
        Back
      </button>
      <div className="flex justify-around items-center h-89">
        <div className="flex flex-col justify-center h-full">
          <img className="w-96" src={country?.flags.svg} alt="" />
        </div>
        <div className="flex flex-col justify-center w-1/2 h-full ">
          <h1 className="text-xl font-bold mb-5">{country?.name.common}</h1>
          <div className="flex flex-col h-32 flex-wrap text-sm">
            <p>Native Name: <span className="text-zinc-500">{country?.name.official}</span></p>
            <p>Population: <span className="text-zinc-500">{country?.population}</span></p>
            <p>Region: <span className="text-zinc-500">{country?.region}</span></p>
            <p>Sub Region: <span className="text-zinc-500">Western Europe</span></p>
            <p>Capital: <span className="text-zinc-500">{country?.capital}</span></p>
            <p>Top Level Domain: <span className="text-zinc-500">Be</span></p>
            <p>Currencies: <span className="text-zinc-500">Euro</span></p>
            <p>Languages: <span className="text-zinc-500">{country?.capital}</span></p>
          </div>
          <div className="flex mt-10 text-sm gap-2 items-center">
            <p>Border Countries: </p>
            <button className="text-zinc-500 shadow-[0px_1px_5px_1px_rgba(0,0,0,0.1)] py-0.5 px-5">France</button>
            <button className="text-zinc-500 shadow-[0px_1px_5px_1px_rgba(0,0,0,0.1)] py-0.5 px-5">Germany</button>
            <button className="text-zinc-500 shadow-[0px_1px_5px_1px_rgba(0,0,0,0.1)] py-0.5 px-5">Netherlands</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CountryDetails }
