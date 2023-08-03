import { useNavigate } from "react-router-dom"

interface CardProps {
	name: string;
  capital: string[]
  population: number
  region: string
  flags: string
}

const Card = ({name, capital, population, region, flags}: CardProps) => {

	const navigate = useNavigate() 

	return (
		<div className="flex flex-col justify-center bg-zinc-50 w-56 h-64 m-auto mt-10 rounded-md shadow">
			<div className="flex justify-center items-center">
				<img className="w-52 h-32" src={flags} alt={flags} />
			</div>
			<div className="m-2.5">
				<h1 className="text-1xl font-semibold pb-2.5">
					{name}
				</h1>
				<div className="text-xs">
					<p>Population: <span className="text-zinc-500">{population}</span></p>
					<p>Region: <span className="text-zinc-500">{region}</span></p>
					<p>Capital: <span className="text-zinc-500">{capital}</span></p>
				</div>
			</div>
			<button className="text-sm border-t bg-gray-100 hover:bg-gray-200 rounded-md" onClick={() => navigate('/detailedcountry')}>
					Ver Mais
			</button>
		</div>
	)
}

export { Card }
