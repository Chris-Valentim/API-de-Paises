import { Link } from "react-router-dom"

const Card = () => {
	return (
		<div id="Home" className="flex flex-col justify-center bg-zinc-50 w-56 h-64 m-auto mt-10 rounded-md shadow">
			<div className="flex justify-center items-center">
				<img className="w-52 h-32" src={'https://flagcdn.com/w320/al.png'} alt="Imagem do País" />
			</div>
			<div className="m-2.5">
				<h1 className="text-1xl font-semibold pb-2.5">
					Albânia
				</h1>
				<div className="text-xs">
					<p>Population: <span className="text-zinc-500">2.800.000</span></p>
					<p>Region: <span className="text-zinc-500">Europe</span></p>
					<p>Capital: <span className="text-zinc-500">Tirana</span></p>
				</div>
			</div>
			<button className="text-sm border-t bg-gray-100 hover:bg-gray-200 rounded-md">
				<nav>
					<ul>
						<li>
							<Link to="/DetailedCountry">Ver Mais</Link>
						</li>
					</ul>
				</nav>
			</button>
		</div>
	)
}

export default Card
