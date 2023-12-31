import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

interface DetailedProps {
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  flag: string;
  currencies: string
  languages: string
}

const DetailedCard = (
{
  nativeName,
  population, 
  capital, 
  currencies, 
  flag, 
  languages, 
  region, 
  subRegion
}: DetailedProps) => { 

  const navigate = useNavigate()

  return (
    <div className="flex flex-col justify-center h-screen">
      <button className="mb-10 w-28 py-1 px-5 ml-[66px] flex justify-center items-center gap-2 shadow-[0px_1px_5px_3px_rgba(0,0,0,0.1)] text-zinc-500" onClick={() => {navigate('/')}}>
        <BsArrowLeft />
        Back
      </button>
      <div className="flex justify-around items-center h-89">
        <div className="flex flex-col justify-center h-full">
          <img className="w-96" src={"https://flagcdn.com/be.svg"} alt="Imagem do País" />
        </div>
        <div className="flex flex-col justify-center w-1/2 h-full ">
          <h1 className="text-xl font-bold mb-5">Belgium</h1>
          <div className="flex flex-col h-32 flex-wrap text-sm">
            <p>Native Name: <span className="text-zinc-500">{nativeName}</span></p>
            <p>Population: <span className="text-zinc-500">{population}</span></p>
            <p>Region: <span className="text-zinc-500">{region}</span></p>
            <p>Sub Region: <span className="text-zinc-500">{subRegion}</span></p>
            <p>Capital: <span className="text-zinc-500">{capital}</span></p>
            <p>Top Level Domain: <span className="text-zinc-500">{flag}</span></p>
            <p>Currencies: <span className="text-zinc-500">{currencies}</span></p>
            <p>Languages: <span className="text-zinc-500">{languages}</span></p>
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

export { DetailedCard }
